import React from 'react';

class Weather extends React.Component {
  state = {  }
  render() {
    return (
      <div>
        <p>Temperature: {this.props.temperature} </p>
        <p>{this.props.humidity}</p>
        <p>{this.props.city}</p>
        <p>{this.props.country}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Weather;