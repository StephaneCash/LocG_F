import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";

function DashBoard() {
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
                                    <h5>Nombre spécialistes</h5>
                                    <h4>56</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="">Voir tout</a>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div className="">
                                    <h5>Nombre SPEC</h5>
                                    <h4>96</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="">Voir tout</a>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div className="">
                                    <h5>Nombre Over</h5>
                                    <h4>36</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="">Voir tout</a>
                            </div>
                        </div>
                    </div>

                    <section className="recent">
                        <div className="activity-grid">
                            <div className="activity-card">
                                <h3 style={{ fontSize: "20px" }}>Recent Activity</h3>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Noms</th>
                                            <th>Adresse</th>
                                            <th>Spécialité</th>
                                            <th>Images</th>
                                            <th>Statut</th>
                                        </tr>
                                    </thead>
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
                                        <tr>
                                            <td>Cash Zeus</td>
                                            <td>Kin 71, Kkt</td>
                                            <td> Software Engineer</td>
                                            <td className="td-team">
                                                <div className="img-1"></div>
                                                <div className="img-2"></div>
                                                <div className="img-3"></div>
                                            </td>
                                            <td>
                                                <span className="badge badge-success">
                                                    En attente
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dosa Zeus</td>
                                            <td>Lukula 195, Kkt</td>
                                            <td> Dév Mobile App</td>
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
                                        <tr>
                                            <td>Alain Kikoni</td>
                                            <td>Kin 71, Kkt</td>
                                            <td> Prof. Hist</td>
                                            <td className="td-team">
                                                <div className="img-1"></div>
                                                <div className="img-2"></div>
                                                <div className="img-3"></div>
                                            </td>
                                            <td>
                                                <span className="badge badge-success">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mboma Espeditte</td>
                                            <td>Kin 71, Kkt</td>
                                            <td> Prof. Fr</td>
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
                                </table>
                            </div>

                            <div className="summary">
                                <div className="summary-card">
                                    <div className="summary-single">
                                        <span className="fa fa-info"></span>
                                        <div>
                                            <h5>132</h5>
                                            <small>Number of staff</small>
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