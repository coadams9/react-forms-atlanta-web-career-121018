import React from 'react'


class Form extends React.Component{
  state = {
    firstName: 'John',
    lastName: 'Henry'
  }

  // handleChangeFirst = (e) => {
  //   this.setState({
  //     firstName: e.target.value
  //   })
  // }
  //
  // handleChangeLast = (e) => {
  //   this.setState({
  //     lastName: e.target.value
  //   })
  // }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render(){
    return(
      <form>
        <input type='textarea' id='firstName' onChange={this.handleChange} value={this.state.firstName} />
        <input type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName} />
      </form>
    )
  }
}


export default Form
