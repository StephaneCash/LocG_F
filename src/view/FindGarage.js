import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import useSwr from "swr";
import ReactMapGL, { Marker, FlyToInterpolator, Popup, FullscreenControl, NavigationControl } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "../css/FindGarage.css";
import React, { useState, useRef, useEffect } from "react";
import markerImg from "../img/marker.png";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import * as parkDate from "../data/dataVille.json";
import Geocoder from 'react-mapbox-gl-geocoder';

const fetcher = (...args) => fetch(...args).then(response => response.json());

function FindGarage() {

    const [viewport, setViewport] = useState({
        latitude: -4.441931,
        longitude: 15.266293,
        width: "auto",
        height: "80vh",
        zoom: 10,
        pitch: 0
    });

    const [selectGarage, setSelectedGarage] = useState(null);
    const a = 'Bonjour';

    const fullscreenControlStyle = {
        right: 10,
        top: 10
    };

    const navControlStyle = {
        bottom: 20,
        right: 10
    }

    const params = {
        country: "ca"
    }

    return (
        <>
            <Header></Header>
            <div className='main-content'>
                <UpComponent />
                <main>
                    <div className="mainDiv">
                        Find


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
                                <button class="btn btn-info" onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedGarage(a);
                                }} >
                                    <img style={{ width: "30px" }} src={markerImg} />
                                </button>
                            </Marker>

                            <Marker
                                latitude={45.4311}
                                longitude={-75.6903}

                            >
                                <div style={{ color: "red" }}>Markeur1</div>
                                <button class="btn btn-info" onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedGarage(a);
                                }} >
                                    <img style={{ width: "30px" }} src={markerImg} />
                                </button>
                            </Marker>

                            {
                                selectGarage ? (
                                    <>
                                        <Popup
                                            latitude={45.4371}
                                            longitude={-75.6203}
                                            onClose={() => {
                                                setSelectedGarage(null)
                                            }}
                                        >
                                            <div>Garage Itex Africa Toute entière, Très prometteur</div>
                                            {selectGarage}
                                        </Popup>

                                    </>
                                ) : ""
                            }

                        </ReactMapGL>
                    </div>
                </main>
            </div>
        </>
    )
}
export default FindGarage