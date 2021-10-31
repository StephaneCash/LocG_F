import { Modal } from "react-bootstrap";
import "../css/LoadWaiting.css";

function LoadWaiting(props) {
    return (
        <>
            <Modal show={props.show} className="waitingModal">
                <Modal.Body>
                    <div>
                        <i className="fa fa-spinner fa-spin"></i> Chargement...
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoadWaiting;