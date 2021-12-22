import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import ReactMapGL, { Marker, Popup, FullscreenControl, NavigationControl } from "react-map-gl";
import "../css/FindGarage.css";
import React, { useState, useEffect } from "react";
import markerImg from "../img/marker.png";
import API_Garages from "../data/API_Garages";
import DetailGarage from "../modal/DetailGarage";
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import Itineraire from "./Itineraire";


function FindGarage() {

    const [etatLoad, setEtatLoad] = useState(true);
    const [data, setData] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [verifData, setVerifData] = useState(false);
    const [etatDetail, setEtatDetail] = useState(false)
    const [id, setId] = useState("");
    const [affIt, setAffIt] = useState(false);
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const key = "pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug"

    const fetchData = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setEtatLoad(false);
            setData(garages);
        })
    }

    var tab = {};

    function Geo(position) {
        let lat = position.coords.latitude;
        tab.lat = lat;
        setLat(lat)
        let lng = position.coords.longitude;
        tab.lng = lng;
        setLng(lng);
    }

    function GeoErreur(err) {
        let msg;
        switch (err.code) {

            case err.TIMEOUT:
                msg = "Le temps de la requête a expiré";
                break;
            case err.UNKNOWN_ERROR:
                msg = "Une erreur inconnue s'est produite";
                break;
            case err.POSITION_UNVAILABLE:
                msg = "Une erreur technique s'est produite";
                break;
            case err.PERMISSION_DENIED:
                msg = "Vous avez refusé la géolocalisation";
                break;

        }
        alert(msg);
    }

    console.log("Data objet ", lng, lat)

    const geoL = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(Geo, GeoErreur, { maximumAge: 120000 })
        } else {
            console.log("Rien");
        }
    }

    useEffect(() => {
        fetchData();
        geoL();
    }, []);

    const [viewport, setViewport] = useState({
        latitude: -4.3254,
        longitude: 15.296293,
        width: "auto",
        height: "75vh",
        zoom: 12.7,
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
        setAffIt(false)
    }

    const closeModal = () => {
        setEtatDetail(false)
    }

    console.log('DATA', data);

    const TrouverItineraire = () => {
        setAffIt(true)
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

                        <p className="d-flex">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Entrer le nom de votre panne ou la marque du véhicule"
                                style={{ width: "40%" }}
                                onChange={handleInput}
                            />

                            <button type="button" className="btn btn-info ml-3" onClick={TrouverItineraire}>Trouver l'itinéraire</button>
                        </p>


                        {
                            affIt ?
                                (<>
                                    <Itineraire />
                                </>) :
                                (<>
                                    {
                                        verifData ? (
                                            <>
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
                                                    {
                                                        valueInput.length > 0 ? (
                                                            <>
                                                                {
                                                                    etatLoad === false ?
                                                                        data.filter((val) => {
                                                                            return val.marque_vehicule.toLowerCase().includes(valueInput);
                                                                        }).map((val) => {
                                                                            return (
                                                                                <>
                                                                                    <Marker
                                                                                        key={val.id}
                                                                                        latitude={val.latitude}
                                                                                        longitude={val.longitude}

                                                                                    >
                                                                                        <button className="btn btn" onClick={(e) => {
                                                                                            e.preventDefault();
                                                                                            setSelectedGarage(a);
                                                                                            setEtatDetail(true)
                                                                                            setId(val.id)
                                                                                        }} >
                                                                                            <img style={{ width: "13px" }} src={markerImg} />
                                                                                            <p>
                                                                                                {val.nom}
                                                                                            </p>
                                                                                        </button>
                                                                                    </Marker>


                                                                                </>
                                                                            )
                                                                        })

                                                                        : ""
                                                                }

                                                                {
                                                                    lat !== "" ? (<>
                                                                        <Marker
                                                                            latitude={lat}
                                                                            longitude={lng}
                                                                        >
                                                                            <i className="fa fa-compass compass"></i>
                                                                            <p style={{ marginLeft: '-40px' }}>Votre position</p>

                                                                        </Marker>
                                                                    </>) : "Pas de connexion"
                                                                }

                                                            </>
                                                        ) : ""
                                                    }

                                                </ReactMapGL>
                                            </>
                                        ) : <h4>Entrer la marque ou une panne de votre véhicule, par exemple : " Mercedes ou pneus " </h4>
                                    }
                                </>)
                        }

                    </div>
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