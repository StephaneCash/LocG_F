import cash from "../img/cash.jpg";
import { useState } from "react";
import { Link } from "react-router-dom"

function UpComponent(props) {

    const [valueInput, setValueInput] = useState("");

    var data = props.valueInput;

    data = valueInput;

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
                            <Link to="/">
                                <span>Se déconnecter</span>
                                <span><i className="fa fa-power-off" style={{ color: "#282c34", fontSize: "19px" }}></i></span></Link>
                        </div>
                    </div>
                </header>

            </div>
        </>
    )
}
export default UpComponent