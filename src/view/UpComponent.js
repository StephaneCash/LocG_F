import cash from "../img/cash.jpg";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';

function UpComponent(props) {

    const [valueInput, setValueInput] = useState("");

    var data = props.valueInput;

    data = valueInput;

    let history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });
    }

    return (
        <>
            <div className="main-content">

                <header>
                    <div className="searchInput">

                    </div>

                    <div className="social-icons">
                        <span className="fa fa-bell"></span>
                        <span className="fa fa-comment"></span>
                        <div>
                            <img src={cash} />
                            <button type="button" onClick={logoutSubmit} className="btn btn-default ml-2" style={{ border: "1px solid silver" }}>
                                Déconnexion <i className="fa fa-power-off" style={{ color: "#282c34", fontSize: "19px" }}></i>
                            </button>
                        </div>
                    </div>
                </header>

            </div >
        </>
    )
}
export default UpComponent