import {Component} from 'react'
import CommonLogin from '../commonLogin'

import './index.css'

class EmployeeStudentLogin extends Component {
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
          buttontext="EMPLOYEE / STUDENT LOGIN"
        />
      </div>
    )
  }
}

export default EmployeeStudentLogin
