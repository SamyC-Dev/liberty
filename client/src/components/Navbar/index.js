import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wraper indigo">
                <div className="container">
                    <NavLink to="/" className="brand-logo">Liberty</NavLink>
                    <NavLink to="#" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </NavLink>
                    <ul className="right hide-on-med-and-down">
                        {/* <li><a href="sass.html"><i className="material-icons">search</i></a></li> */}
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/signup">Se connecter</NavLink></li>
                        <li><NavLink to="/signin" className="waves-effect waves blue btn">S'incrire</NavLink></li>
                    </ul>
                </div>

            </nav>
            <ul className="sidenav" id="mobile-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/signup">Se connecter</NavLink></li>
                <li><NavLink to="/signin" className="waves-effect waves blue btn">S'incrire</NavLink></li>
            </ul>
        </div>

    )
};

export default Navbar;
