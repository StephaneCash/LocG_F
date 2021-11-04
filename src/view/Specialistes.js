import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import "../css/Specialistes.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddSpecialist from "../modal/AddSpecialist";

function Specialistes() {

    const [etatModalAdd, setEtatModalAdd] = useState(false);

    const showModalAddSpecialist = () => {
        setEtatModalAdd(true);
    }

    const closeModalAdd = () => {
        setEtatModalAdd(false);
    }

    return (
        <>
            <Header />
            <div className="main-content">
                <UpComponent />
                <main>
                    <Link to="/findgarages" style={{
                        color: "white", backgroundColor: "#027581", border: "1px solid white", width: "33%",
                        borderRadius: "5px", padding: "10px"
                    }}>
                        Trouver un spécialiste</Link>
                    <button className="button" onClick={showModalAddSpecialist} style={{
                        marginBottom: "10px", backgroundColor: "#027581",
                        border: "1px solid white", width: "19%", borderRadius: "5px", padding: "9px",
                        color: "white"
                    }}>Ajouter un nouveau spécialiste</button>

                    <br />

                    <div className='contentTable' style={{ background: "white", height: "42vh", padding: "10px", overflow: "auto" }}>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-9">
                                    <h5 style={{ padding: '10px', color: "#777" }}>Liste de Spécialistes à proximité</h5>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Rechercher" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>

                        <div className="activity-card">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Noms</th>
                                        <th>Spécialités</th>
                                        <th>Adresse</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>KIKONI Stéphane</td>
                                        <td>épanneur pneu</td>
                                        <td>Kin De la science 5</td>
                                        <td><i className="fa fa-trash"></i>
                                            <i className="fa fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>KIKONI Stéphane</td>
                                        <td>épanneur pneu</td>
                                        <td>Kin De la science 5</td>
                                        <td><i className="fa fa-trash"></i>
                                            <i className="fa fa-edit"></i></td>


                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>KIKONI Stéphane</td>
                                        <td>épanneur pneu</td>
                                        <td>Kin De la science 5</td>
                                        <td><i className="fa fa-trash"></i>
                                            <i className="fa fa-edit"></i></td>


                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>KIKONI Stéphane</td>
                                        <td>épanneur pneu</td>
                                        <td>Kin De la science 5</td>
                                        <td>Supprimer</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>KIKONI Stéphane</td>
                                        <td>Dépanneur pneu</td>
                                        <td>Kin De la science 5</td>
                                        <td>Editer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                    <div className="detailSpec">
                        Détails
                        <div className="content">
                            Veuillez cliquer sur un item <br />
                            <i className="fa fa-refresh fa-spin"></i>
                        </div>
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