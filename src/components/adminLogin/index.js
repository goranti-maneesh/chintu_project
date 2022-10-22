import {Component} from 'react'
import CommonLogin from '../commonLogin'

import './index.css'

class AdminLogin extends Component {
  onAdminLogin = adminDetails => {
    const {history} = this.props
    console.log(adminDetails)
    history.replace('/')
  }

  render() {
    return (
      <div>
        <CommonLogin
          onAdminLogin={this.onAdminLogin}
          buttontext="ADMIN LOGIN"
        />
      </div>
    )
  }
}

export default AdminLogin
