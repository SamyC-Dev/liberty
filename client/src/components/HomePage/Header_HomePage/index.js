import "./header_homepage.css";

const HeaderHomePage = () => {
    return (
        <div className="Header_HomePage">
            <h4>Liberty partager vos photos, vos idées ou réaction du moment...</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit distinctio repudiandae accusamus dolor sit, amet consectetur adipisicing elit. Suscipit distinctio repudiandae accusamus..</p>
            <div className="button_header_homepage">
                <button className="btn waves-effect blue" type="submit" name="action">Se connecter
                    {/* <i className="material-icons right">send</i> */}
                </button>
                <button className="btn waves-effect deep-orange lighten-2" type="submit" name="action">S'incrire
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    )
};

export default HeaderHomePage;