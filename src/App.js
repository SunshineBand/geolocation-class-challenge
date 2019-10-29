import React from 'react';
import axios from 'axios';
import './App.css';
import Clock from './Clock';
import Weather from './Weather';
import sun from './images/sun.png';
import snow from './images/snow.png';

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    weatherDesc: null,
    temp: null,
    date: new Date()
  }
  
  setWeatherDetail() {
    
    console.log('this ran');
    // only request if have a position
    const { latitude, longitude } = this.state;
    axios.post("http://127.0.0.1:5000/weather", {
      lat: latitude,
      long: longitude
    })
    .then(response => {
      console.log('SUCCESS');
      console.log(response.data);
      this.setState((prevState, props) => {
        console.log(prevState);
        return {
          weatherDesc: response.data.description,
          temp: response.data.temp
        }
      })
    })
    .catch(error => {
      console.log('ERR');
      console.log(error);
    })
    .finally(() => {
      console.log('API call done');
    });
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  isItWarm() {
    const { latitude } = this.state;
    const month = this.state.date.getMonth();
    if (
      (month >= 4 && month < 9 && latitude > 0) ||
      ((month >= 9 || month < 4) && latitude < 0) ||
      (latitude === 0)) {
        return true;
      };
    return false;
  }

  getClockIcon() {
    if (this.isItWarm()) {
      return sun;
    };
    return snow
  };

  render() {
    const { latitude, longitude, errorMessage, weatherDesc, temp } = this.state;
    return (
      <>
        <p>{latitude}</p>
        
        <p>{longitude}</p>
        { errorMessage || <Clock
          icon={latitude ? this.getClockIcon() : null}
          timezone={"Sydney/Australia"}
          date={new Date()}
        /> }
        <Weather 
          description={weatherDesc}
          temp={temp}
        />
      </>
    );
  };
};

export default App;
