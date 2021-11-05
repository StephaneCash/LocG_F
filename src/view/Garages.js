import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import "../css/Garages.css";
import React, { useState, useEffect } from "react";
import API_Garages from "../data/API_Garages";
import LoadWaiting from "../modal/LoadWaiting";


function FindGarage() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [etatLoad, setEtatLoad] = useState(true);
    const [valueInput, setValueInput] = useState("");

    const fetchData = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setEtat(true);
            setEtatLoad(false);
            setData(garages);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log("DATA", data);

    const handleSearch = (e) => {
        console.log("Input value : ", e.target.value.toLowerCase())
        let value = e.target.value.toLowerCase();
        setValueInput(value);
    }

    return (
        <>
            <Header></Header>
            <div className='main-content'>
                <UpComponent />
                <main>
                    <div className="mainDiv">
                        <p>
                            Garages
                        </p>
                        <div className="col-md-12" style={{ paddingLeft: "0px", paddingRight: "0px", marginBottom: "10px" }}>
                            <div className="row">
                                <div className="col-md-8">
                                    <button className="btn btn-info">Ajouter un nouveau garage</button>
                                </div>
                                <div className="col-md-4">
                                    <input type="search" placeholder="Rechercher" className="form-control" onChange={handleSearch} />
                                </div>
                            </div>
                        </div>
                        <div className="activity-card">
                            <table className="table">
                                <thead className="table table-bordered">
                                    <tr>
                                        <th>#</th>
                                        <th>Nom</th>
                                        <th>Spécialités</th>
                                        <th>Adresse</th>
                                        <th style={{ width: "260px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        data.length > 0 ? (
                                            <>
                                                {
                                                    data.filter((val) => {
                                                        return (
                                                            val.nom.toLowerCase().includes(valueInput)
                                                        )
                                                    }).map((val) => {
                                                        return (
                                                            <tr >
                                                                <td style={{ border: "1px solid #f0f0f0" }}>{val.id}</td>
                                                                <td style={{ border: "1px solid #f0f0f0" }}>{val.nom}</td>
                                                                <td style={{ border: "1px solid #f0f0f0" }}>
                                                                    {
                                                                        val.specialites.map((donnee) => {
                                                                            return (
                                                                                <>
                                                                                    <span style={{ border: "1px solid silver", padding: "4px" }}>{donnee.nom}</span> &nbsp; &nbsp;
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </td>
                                                                <td style={{ border: "1px solid #f0f0f0" }}>{val.adresse}</td>
                                                                <td>
                                                                    <button className="btn btn-info" style={{ marginRight: "5px" }}>Editer</button>
                                                                    <button className="btn btn-danger" style={{ marginRight: "5px" }} >Supprimer</button>
                                                                    <button className="btn btn-primary">Détail</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <>
                                                <tr >
                                                    <td colSpan="5px" style={{ textAlign: "center" }}>Aucune donnée disponible
                                                        <p>
                                                            <i
                                                                className="fa fa-warning fa-2x"
                                                                style={{ color: "red" }}
                                                            >
                                                            </i>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <LoadWaiting
                        show={etatLoad}
                    />
                </main>
            </div>
        </>
    )
}
export default FindGarage