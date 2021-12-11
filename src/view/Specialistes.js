import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import "../css/Specialistes.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSpecialist from "../modal/AddSpecialist";
import API_Specialistes from "../data/API_Specialistes";
import LoadWaiting from "../modal/LoadWaiting";

function Specialistes() {

    const [etatModalAdd, setEtatModalAdd] = useState(false);
    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [etatLoad, setEtatLoad] = useState(true)

    const fetchData = () => {
        API_Specialistes.getAllspecialistes().then(res => {
            const specialistes = res.data;
            setEtat(true);
            setEtatLoad(false);
            setData(specialistes);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const showModalAddSpecialist = () => {
        setEtatModalAdd(true);
    }

    const closeModalAdd = () => {
        setEtatModalAdd(false);
    }

    console.log("DATA", data)

    return (
        <>
            <Header />
            <div className="main-content">
                <UpComponent />
                <main>
                    <p>
                        Spécialistes
                    </p>
                    <div className="col-md-12" style={{ paddingLeft: "0px", paddingRight: "0px", marginBottom: "10px" }}>
                        <div className="row">
                            <div className="col-md-8">
                                <button className="btn btn-info" onClick={showModalAddSpecialist}>
                                    Ajouter un nouveau Spécialiste
                                </button>
                            </div>
                            <div className="col-md-4">
                                <input type="search" className="form-control" placeholder="Rechercher un spécialiste" />
                            </div>
                        </div>
                    </div>
                    <div className="activity-card">
                        <table className="table">
                            <thead className="table table-bordered">
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Postnom</th>
                                    <th>Prénom</th>
                                    <th style={{ width: "260px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ? (<>
                                        {
                                            data.map((val) => {
                                                return (
                                                    <tr>
                                                        <td style={{ border: "1px solid #f0f0f0" }}>{val.id}</td>
                                                        <td style={{ border: "1px solid #f0f0f0" }}>{val.nom}</td>
                                                        <td style={{ border: "1px solid #f0f0f0" }}>{val.postnom}</td>
                                                        <td style={{ border: "1px solid #f0f0f0" }}>{val.prenom}</td>
                                                        <td style={{ border: "1px solid #f0f0f0" }}>
                                                            <button className="btn btn-default" style={{ marginRight: "5px", border: "1px solid silver" }}>Editer</button>
                                                            <button className="btn btn-default" style={{ marginRight: "5px", border: "1px solid silver" }} >Supprimer</button>
                                                            <button className="btn btn-default" style={{ border: "1px solid silver" }}>Détail</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </>) : (<>
                                        <td colSpan="5px" style={{ textAlign: "center", height: "10vh" }}>
                                            <div id="loadDash">
                                                <LoadWaiting />
                                            </div>
                                        </td>
                                    </>)
                                }

                            </tbody>
                        </table>
                    </div>

                    <AddSpecialist
                        show={etatModalAdd}
                        close={closeModalAdd}
                    />
                </main>
            </div >
        </>
    )
}
export default Specialistes;