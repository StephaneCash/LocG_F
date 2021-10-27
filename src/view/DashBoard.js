import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import { Link } from "react-router-dom";
import API_Specialites from "../data/API_Specialites";
import { useState, useEffect } from "react";

function DashBoard() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [id, setId] = useState(0);
    const [elId, setElId] = useState("");

    const fetchData = () => {
        API_Specialites.getAllSpecialites().then(res => {
            const specialites = res.data;
            setEtat(true);
            setData(specialites);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log("El", elId)


    return (
        <>
            <Header />
            <div className="main-content">
                <UpComponent
                    valueInput={valueSearch}
                />

                <main>
                    <h4 className="dash-title"> <i className="fa fa-dashboard"> </i> Dashboard</h4>

                    <div className="dash-cards">
                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div className="">
                                    <h5>Nombre de Garages</h5>
                                    <h4>{data.length}</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div className="">
                                    <h5>Garages actifs</h5>
                                    <h4>56</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div className="">
                                    <h5>Garages non actifs</h5>
                                    <h4>36</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="">Voir tout</Link>
                            </div>
                        </div>
                    </div>

                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3 style={{ fontSize: "20px" }}>Garages à proximité</h3>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Spécialistes</th>
                                            <th>Spécialités</th>
                                            <th>Adresses</th>
                                            <th>Statut</th>
                                            <th>Détails</th>
                                        </tr>
                                    </thead>

                                    {etat ?
                                        <>
                                            <tbody>
                                                {
                                                    data.filter((val) => {
                                                        return val.nom.toLowerCase().includes(valueSearch);
                                                    }).map((val) => {
                                                        return (
                                                            <>
                                                                <tr key={val.id}>
                                                                    <td>{val.id}</td>
                                                                    <td>{val.specialistes[0].nom} {val.specialistes[0].postnom} {val.specialistes[0].prenom}</td>
                                                                    <td>{val.nom}</td>
                                                                    <td>{val.specialistes[0].adresse}</td>
                                                                    <td>ACTIF</td>
                                                                    <td style={{ cursor: "pointer" }}>
                                                                        <i className="fa fa-info-circle" style={{ fontSize: "25px", color: "#747881", }} onClick={data => { setElId(val.id); setId(2) }}></i>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </>

                                        : <>
                                            <tr>
                                                <div className="dd">
                                                    <i className="fa fa-warning"></i><br />
                                                    Aucune donnée disponible
                                                </div>
                                            </tr>
                                        </>}
                                </table>


                            </div>

                            <div className="summary">
                                <div className="summary-card">
                                    {
                                        etat ?
                                            <>
                                                <div className="summary-single">
                                                    <div>
                                                        {id == 2 ?
                                                            <>
                                                                {
                                                                    data.filter((val) => {
                                                                        return val.nom.toLowerCase().includes(valueSearch);
                                                                    }).map((val) => {
                                                                        if (val.id == elId) {
                                                                            return (
                                                                                <>
                                                                                    <span className="fa fa-info"></span>
                                                                                    <small style={{ fontSize: '14px' }}>Description</small>
                                                                                    <h5 style={{ fontSize: "13px" }}>{val.specialistes[0].description}</h5>
                                                                                </>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </> : ""
                                                        }
                                                    </div>
                                                </div>

                                                <div className="summary-single">

                                                    {id == 2 ?
                                                        <>
                                                            {
                                                                data.filter((val) => {
                                                                    return val.nom.toLowerCase().includes(valueSearch);
                                                                }).map((val) => {
                                                                    if (val.id == elId) {
                                                                        return (
                                                                            <>
                                                                                <span className="fa fa-phone"></span>
                                                                                <small style={{ fontSize: '14px' }}>Téléphone</small> <br />
                                                                                <h5 style={{ fontSize: "13px" }}>{val.specialistes[0].telephone}</h5>

                                                                            </>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </> : <div style={{ textAlign: "center" }}>Veuillez cliquer sur un élément dans le tableau</div>
                                                    }
                                                </div>

                                                <div className="summary-single">

                                                    {id == 2 ?
                                                        <>
                                                            {
                                                                data.filter((val) => {
                                                                    return val.nom.toLowerCase().includes(valueSearch);
                                                                }).map((val) => {
                                                                    if (val.id == elId) {
                                                                        return (
                                                                            <>
                                                                                <span className="fa fa-spinner"></span>
                                                                                <small style={{ fontSize: '14px', marginBottom: "10px" }}>Adresse</small>
                                                                                <h5 style={{ fontSize: "13px", marginTop: "10px" }}>{val.specialistes[0].adresse}</h5>

                                                                            </>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </> : ""
                                                    }
                                                </div>
                                            </> : <div style={{ textAlign: "center", padding: "5px" }}>Pas de données ! </div>
                                    }


                                </div>

                                <div className="bday-card">
                                    <div className="bday-flex">
                                        <div className="bday-img"> </div>
                                        <div className="bday-info">
                                            <h5>Stéphane Kikoni </h5>
                                            <small>Bday Today</small>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button>
                                            <span className="fa fa-check"></span>
                                            Obtenir
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div>
        </>
    )
}
export default DashBoard;