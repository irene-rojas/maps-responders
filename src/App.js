import React, { Component} from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

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
    },
    {
        name: "Fort Washington Hospital",
        address: "11711 Livingston Rd",
        city: "Fort Washington",
        state: "MD",
        zip: 20744,
        lng: -76.992611,
        lat: 38.728376,
        lngLat: [-76.992611,38.728376],
        id: 9
    },
    {
        name: "MedStar Washington Hospital Center",
        address: "110 Irving St NW",
        city: "Washington",
        state: "DC",
        zip: 20010,
        lng: -77.016315,
        lat: 38.929632,
        lngLat: [-77.016315,38.929632],
        id: 10
    },
    {
        name: "MedStar Georgetown University Hospital",
        address: "3800 Reservoir Rd NW",
        city: "Washington",
        state: "DC",
        zip: 20007,
        lng: -77.076138,
        lat: 38.911695,
        lngLat: [-77.076138,38.911695],
        id: 11
    },
    {
        name: "Howard University Hospital",
        address: "2041 Georgia Ave NW",
        city: "Washington",
        state: "DC",
        zip: 20060,
        lng: -77.020867,
        lat: 38.917846,
        lngLat: [-77.020867,38.917846],
        id: 12
    },
    {
        name: "Sibley Memorial Hospital",
        address: "5255 Loughboro Rd NW",
        city: "Washington",
        state: "DC",
        zip: 20016,
        lng: -77.108654,
        lat: 38.937045,
        lngLat: [-77.108654,38.937045],
        id: 13
    },
    {
        name: "Fort Belvoir Community Hospital ",
        address: "9300 DeWitt Loop",
        city: "Fort Belvoir",
        state: "VA",
        zip: 22060,
        lng: -77.144043,
        lat: 38.706118,
        lngLat: [-77.144043,38.706118],
        id: 14
    }
];


class App extends Component {

    state = {
        lng: "",
        lat: "", 
        lngLat: []
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
        mapboxgl.accessToken = "pk.eyJ1IjoiaXJlbmVyb2phcyIsImEiOiJjanY1cWxnMWowMXBmNDVzMmFubG54bG9xIn0.bUcUYG7qMcxDc_QEqVj8Ww";
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

        // HOSPITALS
        new mapboxgl.Marker()
            .setLngLat(hospitals[0].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[0].lngLat)
            .setText(hospitals[0].name)
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

        new mapboxgl.Marker()
            .setLngLat(hospitals[8].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[8].lngLat)
            .setText(hospitals[8].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[9].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[9].lngLat)
            .setText(hospitals[9].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[10].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[10].lngLat)
            .setText(hospitals[10].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[11].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[11].lngLat)
            .setText(hospitals[11].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[12].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[12].lngLat)
            .setText(hospitals[12].name)
            .addTo(map);

        new mapboxgl.Marker()
            .setLngLat(hospitals[13].lngLat)
            .addTo(map);
        new mapboxgl.Popup({className: 'hospitalPopup'})
            .setLngLat(hospitals[13].lngLat)
            .setText(hospitals[13].name)
            .addTo(map);

        // DIRECTIONS
        let directions = new MapboxDirections({
            accessToken: "pk.eyJ1IjoiaXJlbmVyb2phcyIsImEiOiJjanY1cWxnMWowMXBmNDVzMmFubG54bG9xIn0.bUcUYG7qMcxDc_QEqVj8Ww",
            unit: 'imperial',
            profile: 'mapbox/driving-traffic',
            alternatives: true,
            congestion: true,
            flyTo: false,
            steps: true,
            controls: {
                profileSwitcher: false,
                inputs: false,
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

                <div className="title">
                    <h3>Emergency room locator</h3>
                </div>

                <div className="instructions">
                    Navigation start defaults to your position
                    <br/>
                    Click hospital marker base for directions
                    <br/>
                    Powered by <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">Mapbox</a>
                </div>

                <div id="map"></div>

            </div>
        );
    }
}

export default App;
