import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import { Link } from "react-router-dom";
import API_Garages from "../data/API_Garages";
import { useState, useEffect } from "react";
import LoadWaiting from "../modal/LoadWaiting";

function DashBoard() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [id, setId] = useState(0);
    const [elId, setElId] = useState("");
    const [etatLoad, setEtatLoad] = useState(true);

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

    let b = 0;
    let c = null;

    console.log("DATA", data.length)

    for (let i = 0; i < data.length; i++) {
        if (data[i].id_garage === data[2].id_garage) {
            b = b + i;
            console.log("Données ", data[i].nom)
        }
        if (b > 1) {
            console.log("Doublon", data[i + 1])
        }
    }


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
                                <Link to="/garages">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div className="">
                                    <h5>Garages actifs</h5>
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
                                <div className="">
                                    <h5>Garages non actifs</h5>
                                    <h4>0</h4>
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
                                            <th>Nom garage</th>
                                            <th>Spécialités</th>
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
                                                                <tr key={val.id_garage}>
                                                                    <td>{val.id_garage}</td>
                                                                    <td>{val.nom_garage}</td>
                                                                    {
                                                                        val.id_garage === val.id_garage ? (
                                                                            <>

                                                                            </>
                                                                        ) : ""
                                                                    }
                                                                    <td>{val.nom_specialite}</td>
                                                                    <td>{val.adresse_garage}</td>
                                                                    <td>
                                                                        <button
                                                                            className="btn btn-info"
                                                                            onClick={function () {
                                                                                setId(val.id_garage)
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
                                                                        if (val.id_garage === id) {
                                                                            return (
                                                                                <>
                                                                                    <span style={{ fontSize: "14px" }}>
                                                                                        Description garage
                                                                                    </span>
                                                                                    <div style={{ fontSize: "13px", marginTop: "10px" }}>
                                                                                        {val.description_garage}
                                                                                    </div>
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

                                                    {id ?
                                                        <>
                                                            {
                                                                data.map((val) => {
                                                                    if (val.id_garage === id) {
                                                                        return (
                                                                            <>
                                                                                <span style={{ fontSize: "14px" }}>
                                                                                    Description spécialité
                                                                                </span>
                                                                                <div style={{ fontSize: "13px", marginTop: "10px" }}>
                                                                                    {val.description_specialite}
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
                                                                    if (val.id_specialite === elId) {
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
                    <LoadWaiting
                        show={etatLoad}
                    />
                </main>
            </div>
        </>
    )
}
export default DashBoard;