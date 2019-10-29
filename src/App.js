import React from 'react';
import './App.css';
import Clock from './Clock';
import sun from './images/sun.png';
import snow from './images/snow.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      date: new Date()
    };
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState((prevState) => {
            
          })
        },
        (error) => {
          console.log(error)
        }
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
    console.log(this.state.count);
    const { latitude } = this.state;
    return (
      <div>
        {this.state.latitude}
        <Clock
          icon={latitude ? this.getClockIcon() : null}
          timezone={"Sydney/Australia"}
          date={new Date()}
        />
      </div>
    );
  }
};

export default App;
