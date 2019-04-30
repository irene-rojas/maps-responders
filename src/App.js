import React, { Component} from 'react';
import './App.css';
// import hospitals from "./hospitals.json";
// Module parse failed: Unexpected end of JSON input while parsing near ''
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

// const hospitals = require('./hospitals.json');
// this returns same error as above

const hospitals = [
    {
        name: "Inova Franconia-Springfield",
        address: "6355 Walker Ln",
        city: "Alexandria",
        state: "VA",
        zip: 22310,
        lng:-77.161401,
        lat:38.770440,
        lngLat: [-77.161401,38.770440],
        id: 1
    },
    {
        name: "Inova Alexandria",
        address: "4320 Seminary Rd",
        city: "Alexandria",
        state: "VA",
        zip: 22304,
        lng: -77.104437,
        lat: 38.825734,
        lngLat: [-77.104437,38.825734],
        id: 2
    },
    {
        name: "Inova Mount Vernon",
        address: "2501 Parkers Ln",
        city: "Alexandria",
        state: "VA",
        zip: 22306,
        lng: -77.077574,
        lat: 38.743491,
        lngLat: [-77.077574,38.743491],
        id: 3
    },
    {
        name: "Inova Fairfax City",
        address: "4315 Chain Bridge Rd",
        city: "Fairfax",
        state: "VA",
        zip: 22030,
        lng: -77.310961,
        lat: 38.842723,
        lngLat: [-77.310961,38.842723],
        id: 4
    },
    {
        name: "Inova Fairfax Hospital",
        address: "3300 Gallows Rd",
        city: "Falls Church",
        state: "VA",
        zip: 22042,
        lng: -77.226965,
        lat: 38.857931,
        lngLat: [-77.226965,38.857931],
        id: 5
    },
    {
        name: "Inova Lorton",
        address: "9321 Sanger St,",
        city: "Lorton",
        state: "VA",
        zip: 22079,
        lng: -77.226904,
        lat: 38.702781,
        lngLat: [-77.226904,38.702781],
        id: 6
    },
    {
        name: "Virginia Hospital Center",
        address: "1701 N George Mason Dr",
        city: "Arlington",
        state: "VA",
        zip: 22205,
        lng: -77.126455,
        lat: 38.888974,
        lngLat: [-77.126455,38.888974],
        id: 7
    },
    {
        name: "George Washington University Hospital",
        address: "900 23rd St NW",
        city: "Washington",
        state: "DC",
        zip: 20037,
        lng: -77.050458,
        lat: 38.901589,
        lngLat: [-77.050458,38.901589],
        id: 8
    }
];



class App extends Component {

    state = {
        lat: "", 
        lng: "",
        // since JSON doesn't want to import, I'll need to make the hospital list in state
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
