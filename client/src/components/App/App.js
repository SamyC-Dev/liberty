import { Route, Switch } from "react-router";


// Import components
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import About from '../About';

function App() {


  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route exact path="/signin"><Login /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/about"><About /></Route>
      </Switch>
    </div>

  );
}

export default App;
