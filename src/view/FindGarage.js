import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import ReactMapGL, { Marker, Popup, FullscreenControl, NavigationControl } from "react-map-gl";
import "../css/FindGarage.css";
import React, { useState, useEffect } from "react";
import markerImg from "../img/marker.png";
import LoadWaiting from "../modal/LoadWaiting";
import API_Garages from "../data/API_Garages";

function FindGarage() {

    const [etatLoad, setEtatLoad] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setEtatLoad(false);
            setData(garages);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [viewport, setViewport] = useState({
        latitude: -4.441931,
        longitude: 15.266293,
        width: "auto",
        height: "75vh",
        zoom: 10,
        pitch: 0
    });

    const [selectGarage, setSelectedGarage] = useState(null);
    const a = 'Data no disponible !';

    const fullscreenControlStyle = {
        right: 10,
        top: 10
    };

    const navControlStyle = {
        bottom: 20,
        right: 10
    }

    return (
        <>
            <Header></Header>
            <div className='main-content'>
                <UpComponent />
                <main>
                    <div className="mainDiv">
                        <p>
                            Find des garages à proximité
                        </p>

                        <p>
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Entrer le nom de votre panne"
                                style={{ width: "40%" }}
                            />
                        </p>

                        <ReactMapGL
                            mapStyle="mapbox://styles/mapbox/streets-v11"
                            {...viewport}
                            mapboxApiAccessToken="pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug"
                            onViewportChange={viewport => {
                                setViewport(viewport)
                            }}

                        >
                            <FullscreenControl style={fullscreenControlStyle} />
                            <NavigationControl style={navControlStyle} />
                            <Marker
                                latitude={45.4371}
                                longitude={-75.6203}

                            >
                                <div style={{ color: "red" }}>Markeur1</div>
                                <button className="btn btn-info" onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedGarage(a);
                                }} >
                                    <img style={{ width: "30px" }} src={markerImg} />
                                </button>
                            </Marker>

                            <Marker
                                latitude={-4.304330}
                                longitude={15.307230}

                            >
                                <div>Garage Gombe</div>
                                <button className="btn btn" onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedGarage(a);
                                }} >
                                    <img style={{ width: "13px" }} src={markerImg} />
                                </button>
                            </Marker>

                            {
                                selectGarage ? (
                                    <>
                                        <Popup
                                            latitude={-4.304330}
                                            longitude={15.307230}
                                            onClose={() => {
                                                setSelectedGarage(null)
                                            }}
                                        >
                                            {selectGarage}
                                        </Popup>

                                    </>
                                ) : ""
                            }

                        </ReactMapGL>
                    </div>
                    <LoadWaiting
                        show={etatLoad}
                    />
                </main>
            </div>
        </>
    )
}
export default FindGarage