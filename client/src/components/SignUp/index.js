import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// Import action
import { syncSignupPseudo, syncSignupEmail, syncSignupPassword, signUp } from '../../store/actions';

const SignUp = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const pseudoSignup = useSelector((state) => state.signupPseudo);
    const emailSignup = useSelector((state) => state.signupEmail);
    const passwordSignup = useSelector((state) => state.signupPassword);

    return (
        <div>
            <div className=" valign-wrapper row login-box">

                <div className="row col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form >
                        <h4 className="center-align">Inscription</h4>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input
                                    id="first_name"
                                    type="text"
                                    className="validate"
                                    value={pseudoSignup}
                                    onChange={(evt) => {
                                        const pseudo = evt.target.value;
                                        dispatch(syncSignupPseudo(pseudo));
                                    }}
                                />
                                <label className="label_form" htmlFor="first_name">Pseudo</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input
                                    id="email"
                                    type="email"
                                    className="validate"
                                    value={emailSignup}
                                    onChange={(evt) => {
                                        const email = evt.target.value;
                                        dispatch(syncSignupEmail(email));
                                    }}
                                />
                                <label className="label_form" htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input
                                    id="password"
                                    type="password"
                                    className="validate"
                                    value={passwordSignup}
                                    onChange={(evt) => {
                                        const password = evt.target.value;
                                        dispatch(syncSignupPassword(password));
                                    }}
                                />
                                <label className="label_form" htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="center-align" style={{ marginBottom: "20px" }}>
                            <button
                                className="btn waves-effect blue"
                                type="submit"
                                name="action"
                                onClick={(evt) => {
                                    evt.preventDefault();
                                    dispatch(signUp(history));
                                }}
                            >S'incrire
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