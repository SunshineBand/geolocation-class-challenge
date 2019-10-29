import React from 'react';
import './App.css';
import Clock from './Clock';
import sun from './images/sun.png';
import snow from './images/snow.png';

class App extends React.Component {

  state = {
    latitude: null,
    date: new Date()
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  };

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
    const { latitude, errorMessage} = this.state;

    return (
      <div>
        {value}
        { errorMessage || <Clock
          icon={latitude ? this.getClockIcon() : null}
          timezone={"Sydney/Australia"}
          date={new Date()}
        /> }
      </div>
    );
  };
};

export default App;
