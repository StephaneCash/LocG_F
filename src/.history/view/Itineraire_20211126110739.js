import React from 'react';
import "../css/Itineraire.css"
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


mapboxgl.accessToken = "pk.eyJ1Ijoic3RlcGhhbmVjYXNoIiwiYSI6ImNrdjhuN291MjRrYjQyd3A2YjlzcXp3eGUifQ.TD4eitBbhALsXRy9pWwNug";

class Itineraire extends React.Component {

    componentDidMount() {

        // Creates new map instance
        const map = new mapboxgl.Map({
            container: this.mapWrapper,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [15.266293, -4.441931],
            zoom: 10
        });

        // Creates new directions control instance
        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
        });


        // Integrates directions control with map
        map.addControl(directions, 'top-right');
    }

    render() {
        return (
            // Populates map by referencing map's container property
            <div ref={el => (this.mapWrapper = el)} className="mapWrapper">

            </div>
        );
    }
}

export default Itineraire;
