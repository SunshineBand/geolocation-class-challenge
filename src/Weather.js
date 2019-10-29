import React from 'react';

const Weather = (props) => {
  return (
    <>
      <h3>Today is {props.description}</h3>
      <h3>Temperature is {props.temp} degrees Celcius</h3>
    </>
  )
}

export default Weather;