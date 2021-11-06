import { Modal } from "react-bootstrap";
import { useState, useUffect } from "react";
import "../css/AddSpecialist.css";

function AddSpecialist(props) {

    const [etatB, setEtatB] = useState(false);

    const addButton = (e) => {
        e.preventDefault();
        setEtatB(true);
    }

    return (
        <>
            <Modal show={props.show} className="addSpecial">
                <Modal.Header className="headerModal">
                    Ajouter un nouveau spécialiste
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className=" formAddSpecialist">
                            <div className="form-group">
                                <label>Entrer un nom</label>
                                <input type="text" className="form-control" placeholder="Entrer un nom" value="" />
                            </div>
                            <div className="form-group">
                                <label>Entrer un postnom</label>
                                <input type="text" className="form-control" placeholder="Entrer un postnom" value="" />
                            </div>
                            <div className="form-group">
                                <label>Entrer un prénom</label>
                                <input type="text" className="form-control" placeholder="Entrer un prénom" value="" />
                            </div>

                            <div className="form-group">
                                <label>Entrer un numéro de téléphone</label>
                                <input type="number" className="form-control" placeholder="Entrer un numéro de téléphone" value="" />
                            </div>
                            <div className="form-group">
                                <label>Choisir une ou plusieures spécialités</label>
                                <select className="form-control" placeholder="Entrer une adresse" value="">
                                    <option>--Choisir une spécialité--</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={props.close} >Annuler</button>
                    {
                        etatB === false ? (
                            <><button
                                className="btn btn"
                                onClick={addButton}
                                style={{ backgroundColor: '#027581', color: "white", marginRight: "16px" }}>Ajouter</button></>
                        ) : ""
                    }
                    {
                        etatB === true ? (
                            <>
                                <button
                                    className="btn btn-success"
                                    style={{ color: "white", marginRight: "16px" }}
                                >Ajout en cours... <i className='fa fa-refresh fa-spin'></i> </button>
                            </>
                        ) : ""
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddSpecialist;