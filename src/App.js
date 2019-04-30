import React, { Component} from 'react';
import './App.css';
import L from 'leaflet';

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
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }, () => {
                console.log(this.state.lat, this.state.lng);
                this.getMap();
            }); 
        });
    }
    
    getMap = () => {
        var map = L.map('map').setView([this.state.lat, this.state.lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([this.state.lat, this.state.lng]).addTo(map)
            .bindPopup('You are here.')
            .openPopup();
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
