import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import { Link } from "react-router-dom";
import API_Garages from "../data/API_Garages";
import { useState, useEffect } from "react";
import LoadWaiting from "../modal/LoadWaiting";
import API_Specialistes from "../data/API_Specialistes";

function DashBoard() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [id, setId] = useState(0);
    const [elId, setElId] = useState("");
    const [etatLoad, setEtatLoad] = useState(true);
    const [specialistes, setSpecialiste] = useState([]);

    const fetchData = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setEtat(true);
            setEtatLoad(false);
            setData(garages);
        })
    }

    const fetchDataSpec = () => {
        API_Specialistes.getAllspecialistes().then(res => {
            const specialistes = res.data;
            setEtat(true);
            setEtatLoad(false);
            setSpecialiste(specialistes);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchDataSpec();
    }, [])

    console.log("DATA", data);

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
                                <div>
                                    <h5>Nombre de Garages</h5>
                                    <h4>{data.length}</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/garages">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div>
                                    <h5>Spécialités</h5>
                                    <h4>0</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div>
                                    <h5>Spécialistes</h5>
                                    <h4>{specialistes.length}</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/specialistes">Voir tout</Link>
                            </div>
                        </div>
                    </div>

                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3 style={{ fontSize: "20px" }}>Liste de Garages de LUKUNGA </h3>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nom garage</th>
                                            <th style={{ width: "300px" }}>Spécialités</th>
                                            <th>Adresse</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    {etat && data.length > 0 ?
                                        <>
                                            <tbody>
                                                {
                                                    data.map((val) => {
                                                        return (
                                                            <>
                                                                <tr key={val.id}>
                                                                    <td>{val.id}</td>
                                                                    <td>{val.nom}</td>
                                                                    <td style={{ width: "auto" }}>
                                                                        {
                                                                            val.specialites.map((donnee) => {
                                                                                return (
                                                                                    <>
                                                                                        <span style={{ border: "1px solid silver", padding: "4px" }}> {donnee.nom} </span> &nbsp; &nbsp;
                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                    </td>
                                                                    <td>{val.adresse}</td>
                                                                    <td>
                                                                        <button
                                                                            className="btn btn-info"
                                                                            onClick={function () {
                                                                                alert(val.id)
                                                                            }}
                                                                        >
                                                                            Détail
                                                                        </button>
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
                                                        {id ?
                                                            <>
                                                                {
                                                                    data.map((val) => {
                                                                        if (val.id === id) {
                                                                            return (
                                                                                <p key={val.id}>
                                                                                    <span style={{ fontSize: "14px" }}>
                                                                                        Description garage
                                                                                    </span>
                                                                                    <div style={{ fontSize: "13px", marginTop: "10px" }}>

                                                                                    </div>
                                                                                </p>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </> : ""
                                                        }
                                                    </div>
                                                </div>

                                                <div className="summary-single">

                                                    {id ?
                                                        <>
                                                            {
                                                                data.map((val) => {
                                                                    if (val.id === id) {
                                                                        return (
                                                                            <>
                                                                                <span style={{ fontSize: "14px" }}>
                                                                                    Description spécialité
                                                                                </span>
                                                                                <div style={{ fontSize: "13px", marginTop: "10px" }}>

                                                                                </div>

                                                                            </>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </> : <div style={{ textAlign: "center" }}>Veuillez cliquer sur un élément dans le tableau</div>
                                                    }
                                                </div>

                                                <div className="summary-single">

                                                    {id ?
                                                        <>
                                                            {
                                                                data.filter((val) => {
                                                                }).map((val) => {
                                                                    if (val.id === id) {
                                                                        return (
                                                                            <>
                                                                                <span className="fa fa-spinner" style={{ marginTop: "-15px" }}></span>
                                                                                <small style={{ fontSize: '14px', marginTop: "-20px" }}>Adresse</small>
                                                                                <h5 style={{ fontSize: "13px", marginTop: "40px", marginLeft: "-70px" }}></h5>

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