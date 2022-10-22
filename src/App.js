import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/landing'
import LoginPage from './components/login'
import RegisterPage from './components/register'
import AdminLogin from './components/adminLogin'
import EmployeeStudentLogin from './components/employeeStudentLogin'
import Home from './components/home'

import './App.css'

const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/landing" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/admin_login" component={AdminLogin} />

      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/employee_student_login"
        component={EmployeeStudentLogin}
      />
    </Switch>
  </div>
)

export default App
