import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import useSwr from "swr";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "../css/FindGarage.css";
import React, { useState, useRef } from "react";
import markerImg from "../img/marker.png";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

const fetcher = (...args) => fetch(...args).then(response => response.json());

function FindGarage() {

    const [viewport, setViewport] = useState({
        latitude: 52.6376,
        longitude: -1.135171,
        width: "auto",
        height: "75vh",
        zoom: 12
    });

    const mapRef = useRef();

    const url = "http://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";

    const { data, error } = useSwr(url, fetcher);
    const crimes = data && !error ? data.slice(0, 1000) : [];
    const points = crimes.map(crime => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: crime.id,
            category: crime.category
        },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(crime.location.longitude),
                parseFloat(crime.location.latitude)
            ]
        }
    }));

    const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null

    const { clusters, supercluster } = useSupercluster({
        points,
        zoom: viewport.zoom,
        bounds,
        options: { radius: 75, maxZoom: 20 }
    })

    const affichageDetail = () => {
        console.log("YOO");
    }

    console.log('Data', data)

    return (
        <>
            <Header></Header>
            <div className='main-content'>
                <UpComponent />
                <main>
                    <div className="mainDiv">
                        Find

                        <ReactMapGL
                            {...viewport} maxZoom={20}
                            mapStyle="mapbox://styles/mapbox/streets-v11"
                            mapboxApiAccessToken="pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug"
                            onViewportChange={newViewport => {
                                setViewport({ ...newViewport })
                            }}
                            ref={mapRef}
                        >
                            {
                                clusters.map(cluster => {
                                    const [longitude, latitude] = cluster.geometry.coordinates;
                                    const { cluster: isCluster, point_count: poinCount } = cluster.properties;

                                    if (isCluster) {
                                        return (
                                            <Marker
                                                key={cluster.id}
                                                latitude={latitude}
                                                longitude={longitude}
                                            >
                                                <div
                                                    className="cluster-marker"
                                                    style={{
                                                        width: `${10 + (poinCount / points.length) * 50}px`,
                                                        height: `${10 + (poinCount / points.length) * 50}px`,
                                                    }}

                                                    onClick={() => {
                                                        const expansionZoom = Math.min(
                                                            supercluster.getClusterExpansionZoom(cluster.id),
                                                            20
                                                        );
                                                        setViewport({
                                                            ...viewport,
                                                            latitude,
                                                            longitude,
                                                            zoom: expansionZoom,
                                                            transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
                                                            transitionDuratio: "auto"
                                                        })
                                                    }}
                                                >
                                                    {poinCount}
                                                </div>
                                            </Marker>
                                        )
                                    }

                                    return (
                                        <Marker
                                            key={cluster.properties.id}
                                            latitude={latitude}
                                            longitude={longitude}
                                        >
                                            <button className="crime-marker" onClick={affichageDetail}>
                                                <img src={markerImg} alt="Street" />
                                            </button>
                                        </Marker>
                                    );
                                })}
                        </ReactMapGL>
                    </div>
                </main>
            </div>
        </>
    )
}
export default FindGarage