
const SignUp = () => {
    return (
        <div>
            <div className=" valign-wrapper row login-box">

                <div className="row col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form >
                        <h4 className="center-align">Inscription</h4>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input id="first_name" type="text" className="validate" />
                                <label className="label_form" htmlFor="first_name">Pseudo</label>
                            </div>
                        </div>
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
                        <div className="card-action center-align">
                            <button className="btn waves-effect blue" type="submit" name="action">S'incrire
                    <i className="material-icons right">send</i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;