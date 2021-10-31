import { Modal } from "react-bootstrap";
import { useState, useUffect } from "react";
import "../css/AddSpecialist.css";

function AddSpecialist(props) {



    return (
        <>
            <Modal show={props.show} className="addSpecial">
                <Modal.Header>
                    <i className="fa fa-plus"> Ajouter un nouveau spécialiste</i>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
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
                                        <label>Entrer une adresse</label>
                                        <textarea className="form-control" placeholder="Adresse...">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Entrer une description</label>
                                        <textarea className="form-control" placeholder="Description">

                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Entrer un numéro de téléphone</label>
                                        <input type="number" className="form-control" placeholder="Entrer un numéro de téléphone" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Chosir une photo</label>
                                        <input type="file" className="form-control" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Choisir une ou plusieures spécialités</label>
                                        <input type="text" className="form-control" placeholder="Entrer une adresse" value="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={props.close} >Annuler</button>
                    <button className="btn btn" style={{ backgroundColor: '#027581', color: "white" }}>Ajouter</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddSpecialist;