import React from 'react'
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../css/Connexion.css";
import axios from "axios";
import swal from "sweetalert";


function Connexion() {

    const [inputLogin, setInputLogin] = useState({
        username: "",
        password: "",
        error_list: [],
    });

    let history = useHistory();

    const handleInput = (e) => {
        e.persist();
        setInputLogin({
            ...inputLogin, [e.target.name]: e.target.value
        });
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

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: inputLogin.username,
            password: inputLogin.password,
        }
        axios.get("/sanctum/csrf-cookie").then(response => {
            axios.post(`api/login`, data).then(res => {

                if (res.data.status === 200) {

                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    history.push('/home');

                } else if (res.data.status === 401) {
                    swal("Erreur", res.data.message, "warning");
                } else {
                    setInputLogin({ ...inputLogin, error_list: res.data.validation_errors })
                }
            });
        });
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
                            <form className="form" onSubmit={loginSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor='username'>Username</label>
                                    <input type="text" className="form-control"
                                        name='username' onChange={handleInput} value={inputLogin.username}
                                        placeholder="Username" id="username" />
                                    <i style={{ color: "red" }}>{inputLogin.error_list.username}</i>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" onChange={handleInput} value={inputLogin.password}
                                        className="form-control" placeholder="Password" id="password" name="password" />
                                    <i style={{ color: "red" }}>{inputLogin.error_list.password}</i>
                                    <i className="fa fa-eye viewPassword" style={{ cursor: "pointer" }} onClick={changer}></i>
                                </div>

                                <button className="btn buttonConnexion">Se connecter</button>

                                <Link to="/register" style={{ textAlign: "center", color: "black" }}>
                                    <i style={{ float: "right", marginBottom: "20px" }}>Créer un compte</i>
                                </Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion
