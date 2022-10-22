import {Component} from 'react'

import './index.css'

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    department: '',
  }

  onSubmitLoginForm = event => {
    event.preventDefault()

    const {history} = this.props
    const {username, password, firstname, lastname, department} = this.state

    const userDetails = {
      username,
      password,
      firstname,
      lastname,
      department,
    }
    const stringifiedData = JSON.stringify(userDetails)
    console.log(stringifiedData)
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeFirstName = event => {
    this.setState({
      firstname: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  onChangeDepartment = event => {
    this.setState({
      department: event.target.value,
    })
  }

  renderInput = (placeholder, value, onChangeFunction) => (
    <input
      value={value}
      placeholder={placeholder}
      className="signup-input"
      onChange={onChangeFunction}
    />
  )

  render() {
    const {username, password, firstname, lastname, department} = this.state
    return (
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-h1">Sign up</h1>
          <p>Register and enjoy the service</p>
          <form onSubmit={this.onSubmitLoginForm}>
            <div>
              {this.renderInput('Username', username, this.onChangeUsername)}
              <br />
              {this.renderInput('Password', password, this.onChangePassword)}
              <br />
              {this.renderInput(
                'First Name',
                firstname,
                this.onChangeFirstName,
              )}
              <br />
              {this.renderInput('Last Name', lastname, this.onChangeLastName)}
              <br />
              {this.renderInput(
                'Department',
                department,
                this.onChangeDepartment,
              )}
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
        <div className="login-college-image-container">
          <img
            src="https://res.cloudinary.com/degjdup40/image/upload/v1664591961/WhatsApp_Image_2022-10-01_at_5.21.50_AM_kb6fot.jpg"
            alt="college logo"
            className="login-college-image"
          />
        </div>
      </div>
    )
  }
}

export default RegisterPage
