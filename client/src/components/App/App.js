import { Route, Switch } from "react-router";

import "./App.css"

// Import components
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import About from '../About';
import Town from '../TheTown';
// import Footer from '../Footer';

function App() {


  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route exact path="/signin"><Login /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/thetown"><Town /></Route>
      </Switch>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
