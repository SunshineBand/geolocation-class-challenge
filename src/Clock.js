import React from 'react';

class Clock extends React.Component {

  state = {
    date: new Date()
  }
  render() { 
    return (
      <>
        <h3>Timezone: {this.props.timezone}</h3>
        <h5>{this.props.date.toLocaleString()}</h5>
        <img src={this.props.icon} alt="sun or snow" height="500" width="500"></img>
      </>
    )
  }
}

export default Clock;