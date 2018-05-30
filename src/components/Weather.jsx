import React from 'react';

const Weather = props => {
  const { city, country, temperature, humidity, description, error } = props;
  return (

    <div>
      { 
        city && <p className="weather__key"> City: 
        <span className="weather__value"> { city }</span>
        </p> 
      }
      { 
        country && <p className="weather__key">Country: 
        <span className="weather__value">{country}</span>
        </p>
      }
      { 
        temperature && <p className="weather__key">Temperature: 
        <span className="weather__value">{ temperature } </span>
        </p> 
      }
      { 
        humidity && <p className="weather__key">Humidity: 
        <span className="weather__value">{ humidity }</span>
        </p> 
      }
      { 
        description && <p className="weather__key">Weather Condition: 
        <span className="weather__value">{ description }</span>
        </p> }
      { 
        error && <p className="text-danger">Error: 
        { error }
        </p> }
    </div>

  )
}

export default Weather;