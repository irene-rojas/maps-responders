import React, { Component} from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';



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
            }); 
        });
    }
    
    getMap = () => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lat, this.state.lng],
            zoom: 13
            });
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
