import React from 'react'
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../css/Connexion.css"

function Connexion() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ref, setRef] = useState(false);

    let history = useHistory();

    const seConnecter = (e) => {
        e.preventDefault();
        setRef(true)
        setTime()
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
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="blockContenantLiconeUser"><i className="fa fa-car"></i></h5>
                            <h5 style={{ textAlign: "center", marginTop: "20px" }}>Connectez-vous</h5>
                        </div>

                        <div className="card-body">
                            <form className="form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor='username'>Username</label>
                                    <input type="text" className="form-control" placeholder="Username" id="username" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" id="password" />
                                    <i className="fa fa-eye viewPassword" style={{ cursor: "pointer" }} onClick={changer}></i>
                                </div>
                                {
                                    ref === true ? (
                                        <>
                                            <button className="btn buttonConnexion" >Connexion...<i className="fa fa-refresh fa-spin"></i></button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn buttonConnexion" onClick={seConnecter}>Se connecter</button>
                                            <Link to="/register" style={{ textAlign: "center", color:"black" }}>
                                                <i style={{float:"right", marginBottom: "20px" }}>Créer un compte</i>
                                            </Link>
                                        </>
                                    )
                                }
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Connexion
