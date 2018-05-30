import React from 'react';

const Weather = props => {
  const { city, country, temperature, humidity, description, error } = props;
  return (

    <div>
      { city && <p> City: { city }</p> }
      { country && <p>Country: { country }</p> }
      { temperature && <p>Temperature: { temperature } </p> }
      { humidity && <p>Humidity { humidity }</p> }
      { description && <p>Weather Condition: { description }</p> }
      { error && <p>Error: { error }</p> }
    </div>

  )
}

export default Weather;