import { Route, Switch, Redirect } from "react-router";
import { useSelector } from 'react-redux';
import { Notyf } from 'notyf';
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
import PostById from '../PostById';
// import Footer from '../Footer';

const notyf = new Notyf({
  duration: 5000,
  position: {
    x: 'right',
    y: 'top',
  }
});

function App() {

  const User = useSelector((state) => state.user);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/signin"><Login /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/about"><About /></Route>
        <Route
          exact
          path="/profile"
          render={() => {
            if (User === '') {
              notyf.error(`Vous devez etre authentifié ;-(`);
              return <Redirect to="/" />;
            }
            return <Profile />;
          }}
        ></Route>
        <Route
          exact
          path="/thetown"
          render={() => {
            if (User === '') {
              notyf.error(`Vous devez etre authentifié ;-(`);
              return <Redirect to="/" />;
            }
            return <Town />;
          }}
        ></Route>
        <Route
          exact
          path="/createpost"
          render={() => {
            if (User === '') {
              notyf.error(`Vous devez etre authentifié ;-(`);
              return <Redirect to="/" />;
            }
            return <CreatePost />;
          }}
        ></Route>
        <Route
          exact
          path="/post/:postId"
          render={() => {
            if (User === '') {
              notyf.error(`Vous devez etre authentifié ;-(`);
              return <Redirect to="/" />;
            }
            return <PostById />;
          }}
        ></Route>
      </Switch>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
