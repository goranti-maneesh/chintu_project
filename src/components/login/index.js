import {Link} from 'react-router-dom'
import './index.css'

const LoginPage = () => (
  <div className="login-page-container">
    <h1 className="login-page-span">MYNORTHWAST PORTAL</h1>
    <p className="login-page-p">access secure forms and documents</p>
    <Link to="admin_login">
      <button type="button" className="login-page-button">
        ADMIN LOGIN
      </button>
    </Link>
    <br />
    <Link to="employee_student_login">
      <button type="button" className="login-page-button">
        EMPLOYEE / STUDENT LOGIN
      </button>
    </Link>
  </div>
)

export default LoginPage
