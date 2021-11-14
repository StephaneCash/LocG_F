import React from 'react'
import { Modal } from "react-bootstrap";
import API_Garages from '../data/API_Garages';
import { useEffect, useState } from "react"


function DetailGarage(props) {

    const [data, setData] = useState([]);

    let id = props.id;

    const getAllgarages = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setData(garages);
        })
    }

    useEffect(() => {
        getAllgarages();
    }, [])

    return (
        <div>
            <Modal show={props.show} className="waitingModal">
                <Modal.Header className="headerModal">
                    Détails Garage
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {
                            data.map((val) => {
                                if (id === val.id) {
                                    return (
                                        <>
                                            val.nom
                                        </>
                                    )
                                }
                            })
                        }
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
