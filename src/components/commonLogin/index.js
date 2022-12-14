import {Component} from 'react'

import './index.css'

class CommonLogin extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitLoginForm = event => {
    event.preventDefault()
    const {onAdminLogin} = this.props
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }

    onAdminLogin(JSON.stringify(userDetails))
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

  render() {
    const {buttontext} = this.props
    const {username, password} = this.state
    return (
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-h1">Login Page</h1>
          <form onSubmit={this.onSubmitLoginForm}>
            <div>
              <input
                value={username}
                placeholder="Enter UserName"
                className="login-input"
                onChange={this.onChangeUsername}
              />
              <br />
              <input
                value={password}
                placeholder="Enter Password"
                className="login-input"
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="login-button">
              {buttontext}
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

export default CommonLogin
