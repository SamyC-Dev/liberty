
const Navbar = () => {
    return (
        <div>
            <nav className="nav-wraper indigo">
                <div className="container">
                    <a href="#" className="brand-logo">Liberty</a>
                    <a href="#" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                        <li><a href="#">Se connecter</a></li>
                        <li><a href="#" className="waves-effect waves blue btn">S'incrire</a></li>
                    </ul>
                </div>

            </nav>
            <ul className="sidenav" id="mobile-links">
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                <li><a href="#">Se connecter</a></li>
                <li><a href="#" className="waves-effect waves blue btn">S'incrire</a></li>
            </ul>
        </div>

    )
};

export default Navbar;
