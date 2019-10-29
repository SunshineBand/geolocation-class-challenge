import React from 'react';

class Clock extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount() {

    this.intervalId = setInterval(() => {
      this.setState((prevState, props) => {
        return { date: new Date() };
      });
    }, 1000);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState)
  //   if (prevState.dashboard) {
  //     clearInterval(this.intervalId)      
  //   }
  // }

  render() {
    const seconds = this.state.date.getSeconds();
    const minutes = this.state.date.getMinutes();
    const hours = this.state.date.getHours();
    return (
      <>
        <h3>Timezone: {this.props.timezone}</h3>
        <h5>{this.props.date.toLocaleString()}</h5>
        <h6>{hours} : {minutes} : {seconds}</h6>
        <img src={this.props.icon} alt="sun or snow" height="500" width="500"></img>
      </>
    )
  }
}

export default Clock;