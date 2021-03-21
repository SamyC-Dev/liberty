import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { disconnected } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const Navbar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const User = useSelector((state) => state.user);

    const renderList = () => {
        if (User) {
            return [
                <li key='1'><NavLink to="/thetown">The Town</NavLink></li>,
                <li key='2'><NavLink to="/">My favorite</NavLink></li>,
                <li key='3'><NavLink to="/createpost">Create Poste</NavLink></li>,
                <li key='4'><NavLink to="/profile">My Profile</NavLink></li>,
                <button
                    key='5'
                    className="btn waves-effect #e91e63 pink"
                    onClick={() => dispatch(disconnected(history))}
                >Se déconnecter</button>

            ]
        } else {
            return [
                <li key='6'><NavLink to="/about">About</NavLink></li>,
                <li key='7'><NavLink to="/signin">Se connecter</NavLink></li>,
                <li key='8'><NavLink to="/signup" className="btn waves-effect deep-orange lighten-2">S'incrire<i className="material-icons right">send</i></NavLink></li>

            ]
        }
    }


    return (
        <div>
            <nav className="nav-wraper blue">
                <div className="container">
                    <NavLink to="/" className="brand-logo">Liberty</NavLink>
                    <NavLink to="#" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </NavLink>
                    <ul className="right hide-on-med-and-down">
                        {renderList()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-links">
                {renderList()}
            </ul>
        </div>

    )
};

export default Navbar;





