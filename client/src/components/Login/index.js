import "./login.css";

const Login = () => {
    return (
        <div>
            <div className=" valign-wrapper row login-box">

                <div className="row col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form >
                        <h4 className="center-align">Se connecter</h4>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input id="email" type="email" className="validate" />
                                <label className="label_form" htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input id="password" type="password" className="validate" />
                                <label className="label_form" htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className=" center-align" style={{ marginBottom: "20px" }}>
                            <button className="btn waves-effect blue" type="submit" name="action">Se connecter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;