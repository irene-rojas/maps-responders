import React, { Component} from 'react';
import './App.css';
// import hospitals from "./hospitals.json";
// Module parse failed: Unexpected end of JSON input while parsing near ''
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

// const hospitals = require('./hospitals.json');
// this returns same error as above

class App extends Component {

    state = {
        lat: "", 
        lng: "",
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => { 
            this.setState({
                lat: position.coords.latitude.toFixed(4),
                lng: position.coords.longitude.toFixed(4),
            }, () => {
                console.log(this.state.lat, this.state.lng);
                this.getMap();
                this.findHospitals();
            }); 
        });
    }
    
    // MAPBOX - LNG, LAT!!
    getMap = () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXJlbmVyb2phcyIsImEiOiJjanYzNmk3MXkwNGZxM3ludzdqcjRnNWVyIn0.K6kZ5Mxbwn7TZbocBF4F0A';
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: 11
            });
        new mapboxgl.Marker()
            .setLngLat([this.state.lng, this.state.lat])
            .addTo(map);
        // new mapboxgl.Popup({className: 'my-class'})
        //     .setLngLat([this.state.lng, this.state.lat])
        //     .setHTML("<h1>You are here!</h1>")
        //     .setMaxWidth("200px")
        //     .addTo(map);
    }

    findHospitals = () => {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=${this.state.lng},${this.state.lat}&access_token=pk.eyJ1IjoiaXJlbmVyb2phcyIsImEiOiJjanYzNmV6NXkyY3cwNDlzMDFqYWR4dXl6In0.5UPvZCHoxCO0nXfMJP0R7A`)
        .then(res => {
            const result = res.data;
            console.log(result);
        })
    }

    render() {
        return (
            <div className="App">

                <div id="map"></div>

            </div>
        );
    }
}

export default App;
