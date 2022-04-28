import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import doctor from './pages/doctor';
import Nurse from './pages/Nurse';
import Tstaff from './pages/Tstaff';
import Astaff from './pages/Astaff';
import pharmacist from './pages/pharmacist';
import SignUp from './pages/signup';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/doctor' component={doctor} />
        <Route path='/Nurse' component={Nurse} />
        <Route path='/Tstaff' component={Tstaff} />
        <Route path='/Astaff' component={Astaff} />
        <Route path='/pharmacist' component={pharmacist} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}
  
export default App;