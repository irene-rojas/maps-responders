import React, { Component} from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import axios from 'axios';

const hospitals = [
    {
        name: "Inova Franconia-Springfield",
        address: "6355 Walker Ln",
        city: "Alexandria",
        state: "VA",
        zip: 22310,
        lng: -77.160734,
        lat: 38.767261,
        lngLat: [-77.160734,38.767261],
        id: 1
    },
    {
        name: "Inova Alexandria",
        address: "4320 Seminary Rd",
        city: "Alexandria",
        state: "VA",
        zip: 22304,
        lng: -77.104506,
        lat: 38.822312,
        lngLat: [-77.104506,38.822312],
        id: 2
    },
    {
        name: "Inova Mount Vernon",
        address: "2501 Parkers Ln",
        city: "Alexandria",
        state: "VA",
        zip: 22306,
        lng: -77.076892,
        lat: 38.739944,
        lngLat: [-77.076892,38.739944],
        id: 3
    },
    {
        name: "Inova Fairfax City",
        address: "4315 Chain Bridge Rd",
        city: "Fairfax",
        state: "VA",
        zip: 22030,
        lng: -77.310210,
        lat: 38.838109,
        lngLat: [-77.310210,38.838109],
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
        lng: "",
        lat: "", 
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => { 
            this.setState({
                lng: position.coords.longitude,
                lat: position.coords.latitude,
                lngLat: [position.coords.longitude,position.coords.latitude]
            }, () => {
                console.log(this.state.lat, this.state.lng);
                this.getMap();
            }); 
        });
    }
    
    // MAPBOX - LNG, LAT!!
    getMap = () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaXJlbmVyb2phcyIsImEiOiJjanYzNmk3MXkwNGZxM3ludzdqcjRnNWVyIn0.K6kZ5Mxbwn7TZbocBF4F0A';
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng,this.state.lat],
            zoom: 12
            });

        // CURRENT LOCATION
        new mapboxgl.Popup({closeButton: false, offset: 10, className: 'currentPopup', anchor: 'left'})
            .setLngLat([this.state.lng,this.state.lat])
            .setText("You are here")
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[0].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[0].lngLat)
            .setText(hospitals[0].name)
            // when click hospital name, setDestination to those coordinates
            // .setHTML(`<p><a>${hospitals[0].name}</a></p>`)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[1].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[1].lngLat)
            .setText(hospitals[1].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[2].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[2].lngLat)
            .setText(hospitals[2].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[3].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[3].lngLat)
            .setText(hospitals[3].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[4].lngLat)
            .addTo(map);
            new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[4].lngLat)
            .setText(hospitals[4].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[5].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[5].lngLat)
            .setText(hospitals[5].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[6].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[6].lngLat)
            .setText(hospitals[6].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[7].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[7].lngLat)
            .setText(hospitals[7].name)
            .addTo(map);

        let directions = new MapboxDirections({
            accessToken: 'pk.eyJ1IjoiaXJlbmVyb2phcyIsImEiOiJjanYzNmk3MXkwNGZxM3ludzdqcjRnNWVyIn0.K6kZ5Mxbwn7TZbocBF4F0A',
            unit: 'imperial',
            profile: 'mapbox/driving-traffic',
            alternatives: true,
            congestion: true,
            flyTo: false,
            proximity: [this.state.lng,this.state.lat],
            setOrigin: [this.state.lng,this.state.lat],
            controls: {
                inputs: true,
                instructions: true,
              }
            });
            map.addControl(directions, 'top-left');   

            map.on('load', () => {
                directions.setOrigin([this.state.lng,this.state.lat]);
            });
    }


    render() {
        return (
            <div className="App">

                <div>
                    <h3>Emergency room locator</h3>
                </div>

                <div>
                    Navigation start defaults to your position
                    <br/>
                    Click hospital marker base for directions
                </div>

                <div>
                    <div id="map"></div>
                </div>

            </div>
        );
    }
}

export default App;
