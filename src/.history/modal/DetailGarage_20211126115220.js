import React from 'react'
import { Modal } from "react-bootstrap";
import API_Garages from '../data/API_Garages';
import { useEffect, useState } from "react"
import "../css/AddSpecialist.css"
import "../css/DetailGarage.css"


function DetailGarage(props) {

    const [data, setData] = useState([]);

    let id = props.id;

    const getAllgarages = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setData(garages);
        })
    }

    console.log(data);

    useEffect(() => {
        getAllgarages();
    }, [])

    return (
        <div>
            <Modal show={props.show} className="detailGarage">
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
                                            <p key={val.id}>
                                               <h3> {val.nom} </h3>
                                            </p>
                                            <p>
                                                <img src={`http://localhost:8000/${val.image}`} style={{ width: "50%", margin:"10px 25%" }} alt={val.image} />
                                            </p>
                                        </>
                                    )
                                }
                            })
                        }
                        <hr />
                        <div className="col-md-12">
                            <div className="row">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Adresse</th>
                                            <th>Spécialité véhicule</th>
                                            <th colSpan="2px">Téléphone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((donnee) => {
                                                if (id === donnee.id) {
                                                    return (
                                                        <tr key={donnee.id}>
                                                            <td>{donnee.adresse}</td>
                                                            <td>{donnee.marque_vehicule}</td>
                                                            {
                                                                donnee.specialistes.map((v) => {
                                                                    return <td colSpan="auto">{v.telephone }</td>
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                }
                                            })
                                        }
                                    </tbody>
                                    
                                </table>

                                <button type="button" className="btn btn-success">Voir plus</button>
                            </div>
                        </div>
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
