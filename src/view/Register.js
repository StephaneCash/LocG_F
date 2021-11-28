import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Register() {

    const [ref, setRef] = useState(false);
    const [register, setRegister] = useState({
        noms: '',
        email: '',
        username: '',
        password: '',
        error_list: []
    });

    let history = useHistory();

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

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...register, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {

        e.preventDefault();
        const data = {
            noms: register.noms,
            email: register.email,
            username: register.username,
            password: register.password,
        }

        axios.get("/sanctum/csrf-cookie").then(response => {
            axios.post(`api/register`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    history.push('/');
                } else {
                    setRegister({
                        ...register, error_list: res.data.validation_errors
                    });
                }
            });
        });
    }

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="blockContenantLiconeUser"><i className="fa fa-user"></i></h5>
                                <h5 style={{ textAlign: "center", marginTop: "20px" }}>Inscrivez-vous</h5>
                            </div>

                            <div className="card-body">
                                <form className="form" onSubmit={registerSubmit}>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor='username'>Noms complets</label>
                                        <input type="text"
                                            name="noms"
                                            className="form-control"
                                            onChange={handleInput}
                                            value={register.noms}
                                            placeholder="Noms complets"
                                            id="noms"
                                        />
                                        <i style={{ color: "red" }}>{register.error_list.noms}</i>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor='username'>Email</label>
                                        <input type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email" id="Email"
                                            onChange={handleInput}
                                            value={register.email}
                                        />
                                        <i style={{ color: "red" }}>{register.error_list.email}</i>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor='username'>Username</label>
                                        <input type="text" className="form-control"
                                            name="username"
                                            placeholder="Username" id="username" onChange={handleInput}
                                            value={register.username} />
                                        <i style={{ color: "red" }}>{register.error_list.username}</i>
                                    </div>


                                    <div className="form-group">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            id="password" onChange={handleInput}
                                            value={register.password} />
                                        <i style={{ color: "red" }}>{register.error_list.password}</i>
                                        <i className="fa fa-eye viewPassword" onClick={changer} style={{ cursor: "pointer" }} ></i>
                                    </div>

                                    {
                                        ref === true ? (
                                            <>
                                                <button className="btn buttonConnexion" >Connexion...<i className="fa fa-refresh fa-spin"></i></button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="btn buttonConnexion" >S'inscrire</button>
                                                <Link to="/" style={{ textAlign: "center", color: "black" }}>
                                                    <i style={{ float: "right", marginBottom: "20px" }}> Avez-vous déjà un compte ? Connectez-vous</i>
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
        </>
    )
}
export default Register