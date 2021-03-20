import { Route, Switch, Redirect } from "react-router";
import { useSelector } from 'react-redux';


import "./App.css";
import 'notyf/notyf.min.css';

// Import components
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import About from '../About';
import Town from '../TheTown';
import CreatePost from '../Create_Post';
// import Footer from '../Footer';

function App() {

  const User = useSelector((state) => state.user);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route
          exact
          path="/profile"
          render={() => {
            if (User === '') {
              console.log('vous devez etre connecté')
              return <Redirect to="/" />;
            }
            return <Profile />;
          }}
        ></Route>
        <Route exact path="/signin"><Login /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/thetown"><Town /></Route>
        <Route exact path="/createpost"><CreatePost /></Route>
      </Switch>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
