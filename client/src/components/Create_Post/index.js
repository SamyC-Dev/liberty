import './createPost.css';

const CreatePost = () => {
    return (
        <div className='createPost_container'>
            <div className=" valign-wrapper row ">

                <div className="row col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form >
                        <h4 className="center-align">Créer son post</h4>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <input id="postTitle" type="text" className="validate" />
                                <label className="label_form" htmlFor="postTitle">Titre</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 ">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label className="label_form" htmlFor="textarea1">Votre texte</label>
                            </div>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn waves-effect blue">
                                <span>Image</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>

                        <div className="center-align" style={{ margin: "30px auto" }}>
                            <button className="btn waves-effect blue" type="submit" name="action">Poster
                            <i className="material-icons right">send</i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;
