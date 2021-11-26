import React from 'react'
import '../css/Connexion.css';
import { useState } from "react";
import { useHistory } from "react-router-dom"

function Connexion() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ref, setRef] = useState(false);

    let history = useHistory();

    const seConnecter = (e) => {
        e.preventDefault();
        setRef(true)
        //setTime()
    }

    const setTime = () => {
        setTimeout(() => {
            history.push('home')
        }, 1000)
    }

    let view = true;
    const changer = () => {
        if (view) {
            document.getElementById('password').setAttribute('type', 'text');
            view = false;
        } else {
            document.getElementById('password').setAttribute('type', 'password');
            view = true;
        }
    }

    return (
        <div className="connexion">
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>Loc_Gargage</h4>
            <hr></hr>
            <h5 className="blockContenantLiconeUser"><i className="fa fa-user-o"></i></h5>
            <h4 style={{ textAlign: "center", marginTop: "20px" }}>Connectez-vous</h4>

            <form className="form">
                <div className="form-group">
                    <label className="form-label" htmlFor='username'>Username</label>
                    <input type="text" className="form-control" placeholder="Username" id="username" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" id="password" />
                    <i className="fa fa-eye viewPassword" onClick={changer}></i>
                </div>
                {
                    ref === true ? (
                        <>
                            <button className="btn buttonConnexion" >Connexion...<i className="fa fa-refresh fa-spin refreshIcon"></i></button>
                        </>
                    ) : (
                        <>
                            <button className="btn buttonConnexion" onClick={seConnecter}>Se connecter</button>
                        </>
                    )
                }
            </form>
        </div>
    )
}

export default Connexion
