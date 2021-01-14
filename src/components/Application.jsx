import 'eds-top-bar';
import 'eds-menu';
import '../App.css';
import 'eds-button';
import 'eds-textfield';
import 'eds-top-bar';
import LandingPage from './LandingPage';
import React, {useContext} from 'react';
import {Router} from '@reach/router';
import SignIn from './Login';
import SignUp from './SignUp';
import Settings from './Settings';
import { UserContext } from '../providers/UserProvider';
import DesignSystem from './DesignSystem';

function App() {
  const user = useContext(UserContext);
  return (
    user ? 
      <Router>
        <LandingPage path="/" />
        <Settings path="settings"/>
        <DesignSystem path="design-system"/>
      </Router>
    : 
    <div className="App">
      <Router>
        <SignUp path="signUp" />
        <SignIn path="/" />
      </Router>
    </div>
  );
}

export default App;
