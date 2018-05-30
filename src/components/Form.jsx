import React from 'react'

class Form extends React.Component {
  state = {  }
  render() {
    return (
      <form >
        <input type="text" name="city" placeholder="Enter City"/>
        <input type="text" name="country" placeholder="Enter Country"/>
        <button>Search</button>
      </form>
    );
  }
}

export default Form;