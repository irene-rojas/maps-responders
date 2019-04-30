import React, { Component} from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from 'mapbox-gl-geocoder';


class App extends Component {

    state = {
        lat: "", 
        lng: ""
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
            zoom: 13
            });
        new mapboxgl.Marker()
            .setLngLat([this.state.lng, this.state.lat])
            .addTo(map);
        // new mapboxgl.Popup({className: 'my-class'})
        //     .setLngLat([this.state.lng, this.state.lat])
        //     .setHTML("<h1>You are here!</h1>")
        //     .setMaxWidth("200px")
        //     .addTo(map);
        // var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
        // map.addControl(geocoder);
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
