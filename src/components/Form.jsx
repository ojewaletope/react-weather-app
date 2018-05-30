import React from 'react'

class Form extends React.Component {
  state = {  }
  render() {
    return (
     <div>
       <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter City"/>
        <input type="text" name="country" placeholder="Enter Country"/>
        <button>Get Weather</button>
      </form>     
     </div>
    );
  }
}

export default Form;