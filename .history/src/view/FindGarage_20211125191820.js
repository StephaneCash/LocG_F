import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import MapGL, { Marker, Popup, FullscreenControl, NavigationControl } from "react-map-gl";
import "../css/FindGarage.css";
import React, { useState, useEffect } from "react";
import markerImg from "../img/marker.png";
import LoadWaiting from "../modal/LoadWaiting";
import API_Garages from "../data/API_Garages";
import DetailGarage from "../modal/DetailGarage";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "../../node_modules/@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import { ScaleControl } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

function FindGarage() {

    const [etatLoad, setEtatLoad] = useState(true);
    const [data, setData] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [verifData, setVerifData] = useState(false);
    const [etatDetail, setEtatDetail] = useState(false)
    const [id, setId] = useState("");

    const fetchData = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setEtatLoad(false);
            setData(garages);
        })
    }

    const directions = new MapboxDirections({
        accessToken: "pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug",
        unit: 'metric',
        profile: 'mapbox/driving'
    })

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

    const handleInput = (e) => {
        let value = e.target.value.toLowerCase();
        setValueInput(value)
        console.log("value:", value)
        setVerifData(true)
    }

    const closeModal = () => {
        setEtatDetail(false)
    }

    const key = "pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug";

    function getAccessToken() {
        var accessToken = null

        if (typeof window !== 'undefined' && window.location) {
            var match = window.location.search.match(/access_token=([^&\/]*)/)
            accessToken = match && match[1]
        }

        if (!accessToken && typeof process !== 'undefined') {
            // Note: This depends on bundler plugins (e.g. webpack) inmporting environment correctly
            accessToken = accessToken || key // eslint-disable-line
        }

        return accessToken || null
    }

   let mapRef = React.createRef()

    // Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
    const MAPBOX_TOKEN = getAccessToken()

    console.log('DATA', data)

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
                                placeholder="Entrer le nom de votre panne ou la marque du véhicule"
                                style={{ width: "40%" }}
                                onChange={handleInput}
                            />
                        </p>
                        {
                            verifData ? (
                                <>
                                    <MapGL
                                        mapStyle="mapbox://styles/mapbox/streets-v11"
                                        {...viewport}
                                        mapboxApiAccessToken="pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug"
                                        onViewportChange={viewport => {
                                            setViewport(viewport)
                                        }}

                                    >
                                        <FullscreenControl style={fullscreenControlStyle} />
                                        <NavigationControl style={navControlStyle} />
                                        {
                                            valueInput.length > 0 ? (
                                                <>
                                                    {
                                                        etatLoad === false ?
                                                            data.filter((val) => {
                                                                return val.nom.toLowerCase().includes(valueInput);
                                                            }).map((val) => {
                                                                return (
                                                                    <>
                                                                        <Marker
                                                                            key={val.id}
                                                                            latitude={val.latitude}
                                                                            longitude={val.longitude}

                                                                        >
                                                                            <div>{val.nom}</div>
                                                                            <button className="btn btn" onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setSelectedGarage(a);
                                                                                setEtatDetail(true)
                                                                                setId(val.id)
                                                                            }} >
                                                                                <img style={{ width: "13px" }} src={markerImg} />
                                                                            </button>
                                                                        </Marker>
                                                                    </>
                                                                )
                                                            })

                                                            : ""
                                                    }

                                                </>
                                            ) : ""
                                        }

                                    </MapGL>
                                </>
                            ) : <h4>Entrer la marque ou une panne de votre véhicule, par exemple : " Mercedes ou pneus " </h4>
                        }

                    </div>
                    <LoadWaiting
                        show={etatLoad}
                    />
                    <DetailGarage
                        show={etatDetail}
                        close={closeModal}
                        id={id}
                    />
                </main>
            </div>
        </>
    )
}
export default FindGarage