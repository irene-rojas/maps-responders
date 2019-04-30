import React, { Component} from 'react';
import './App.css';
// import L from 'leaflet';

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
            }); 
        });
    }
    
    getMap = () => {
    }


    render() {
        return (
            <div className="App">

                <div>
                    Lat: {this.state.lat}, Lng: {this.state.lng}
                </div>

                <div id="mapId"></div>

            </div>
        );
    }
}

export default App;
