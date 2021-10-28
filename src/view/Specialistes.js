import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import "../css/Specialistes.css";
import { Link } from "react-router-dom";

function Specialistes() {
    return (
        <>
            <Header />
            <div className="main-content">
                <UpComponent />
                <main>
                    <div className="button1" style={{ backgroundColor: "#027581", border: "1px solid white", width: "20%", borderRadius: "5px", padding: "5px", textAlign: "center", color: "white" }}>
                        <Link to="/findgarages" style={{ color: "white" }}>Trouver un spécialiste</Link>
                    </div>
                    <br />

                    <div className='contentTable' style={{ background: "white", height: "40vh", padding: "10px", overflow: "auto" }}>
                        <h4 style={{ border: "1px solid silver", padding: '10px', color: "#777" }}>Liste de Spécialistes à proximité</h4>
                        <div className="btnAj">
                            <button className="button" style={{
                                marginBottom: "10px", backgroundColor: "#027581", border: "1px solid white", width: "40%", borderRadius: "5px", padding: "5px",
                                textAlign: "center", color: "white"
                            }}>Ajouter un nouveau spécialiste</button>
                        </div>
                        <div className="inputSearch">
                            <input type="text" className="form-control" placeholder="Recherche" style={{ width: "100%" }} />
                        </div>

                        <table className="table table table-bordered">
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
                                    <td><i className="fa fa-trash"></i></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>KIKONI Stéphane</td>
                                    <td>épanneur pneu</td>
                                    <td>Kin De la science 5</td>
                                    <td>Supprimer</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>KIKONI Stéphane</td>
                                    <td>épanneur pneu</td>
                                    <td>Kin De la science 5</td>
                                    <td>Supprimer</td>
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
                    <div className="detailSpec">
                        Détails
                        <div className="content">
                            Veuillez cliquer sur un item <br />
                            <i className="fa fa-refresh fa-spin"></i>
                        </div>
                    </div>
                </main>
            </div >
        </>
    )
}
export default Specialistes;