import React from 'react'
import { Modal } from "react-bootstrap";


function DetailGarage() {
    return (
        <div>
            <Modal show={true} className="waitingModal">
                <Modal.Header className="headerModal">
                    Détails Garage
                </Modal.Header>
                <Modal.Body>
                    <div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="headerModal">
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DetailGarage
