import React from 'react'
import { Modal } from "react-bootstrap";
import API_Garages from '../data/API_Garages';


function DetailGarage(props) {

    

    return (
        <div>
            <Modal show={props.show} className="waitingModal">
                <Modal.Header className="headerModal">
                    Détails Garage
                </Modal.Header>
                <Modal.Body>
                    <div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="headerModal">
                    <button className="btn btn-dark" onClick={props.close}>Fermer</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DetailGarage
