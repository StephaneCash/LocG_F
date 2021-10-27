import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import { Link } from "react-router-dom";
import API_Specialites from "../data/API_Specialites";
import { useState, useEffect } from "react";

function DashBoard() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);

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

    console.log("DATA", data)

    return (
        <>
            <Header />
            <div className="main-content">
                <UpComponent />

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
                                            <th>Nom</th>
                                            <th>Spécialistes</th>
                                            <th>Spécialités</th>
                                            <th>Adresses</th>
                                            <th>Images</th>
                                            <th>Statut</th>
                                        </tr>
                                    </thead>

                                    {etat ?
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>Stéphane KIkoni</td>
                                                    <td>Kin de la science 5</td>
                                                    <td>Dév full stack</td>
                                                    <td className="td-team">
                                                        <div className="img-1"></div>
                                                        <div className="img-2"></div>
                                                        <div className="img-3"></div>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-success">
                                                            Success
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>

                                        : <>
                                            <div className="dd">
                                                <i className="fa fa-warning"></i><br />
                                                Aucune donnée disponible
                                            </div>
                                        </>}
                                </table>


                            </div>

                            <div className="summary">
                                <div className="summary-card">
                                    <div className="summary-single">
                                        <span className="fa fa-info"></span>
                                        <div>
                                            <h5>132</h5>
                                            <small>Téléphone</small>
                                        </div>
                                    </div>

                                    <div className="summary-single">
                                        <span className="fa fa-phone"></span>
                                        <div>
                                            <h5>232</h5>
                                            <small>Number of leave</small>
                                        </div>
                                    </div>

                                    <div className="summary-single">
                                        <span className="fa fa-spinner"></span>
                                        <div>
                                            <h5>192</h5>
                                            <small>Number of cash</small>
                                        </div>
                                    </div>
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