import cash from "../img/cash.jpg";
import { useState } from "react";

function UpComponent(props) {

    const [valueInput, setValueInput] = useState("");

    var data = props.valueInput;

    data = valueInput;

    return (
        <>
            <div class="main-content">

                <header>
                    <div class="searchInput">
                        <span class="fa fa-search"></span>
                        <input type="saerch" placeholder="Rechercher" onChange={e => setValueInput(e.target.value)} />
                    </div>

                    <div class="social-icons">
                        <span class="fa fa-bell"></span>
                        <span class="fa fa-comment"></span>
                        <div>
                            <img src={cash} />
                        </div>
                    </div>
                </header>

            </div>
        </>
    )
}
export default UpComponent