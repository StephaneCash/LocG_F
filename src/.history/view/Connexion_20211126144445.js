import React from 'react'
import '../css/Connexion.css';

function Connexion() {
    return (
        <div className="connexion">
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>Loc_Specialist</h4>
            <hr></hr>
            <h5 className="blockContenantLiconeUser"><i className="fa fa-user-o"></i></h5>
            <h4 style={{ textAlign: "center", marginTop: "20px" }}>Sign In</h4>

            <form className="form">
                <div className="form-group">
                    <label className="form-label" htmlFor='username'>Username</label>
                    <input type="text" className="form-control" placeholder="Username" id="username" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" id="password" />
                </div>

                <button className="btn btn-primary buttonConnexion">Se connecter</button>
            </form>
        </div>
    )
}

export default Connexion
