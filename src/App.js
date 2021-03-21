import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn'

import { createContext, useState } from 'react';

import PrivateRoute from './Components/PrivetRoute/PrivateRoute';
import Transport from './Components/Transport/Transport';
import NavBar from './Components/Navbar/NavBar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/signin">
        <SignIn></SignIn>
        </Route>
        <PrivateRoute path="/transport/:Id">
          <Transport></Transport>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
