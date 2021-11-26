import React from 'react'
import "../css/DashBoard.css"
import "../css/Hedaer.css"
import Header from '../view/Header'
import UpComponent from '../view/UpComponent';
import { useLocation } from "react-router-dom";


function DetailGaragePlus() {

    const location = useLocation();
    let id = location.state.id;
    const data = location.state.data;

    return (
        <div>
            <UpComponent />
            <Header />
            <div className="main-content">
                <main>
                    <div className="activity-card">
                    <table className="table">
                        <thead className="table table-bordered">
                            <tr>
                                <th>Nom garage</th>
                                <th>Spécialistes</th>
                                <th>Spécialités</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                data.map((val) => {
                                    if (id === val.id) {
                                        return (
                                            <tr key={val.id}>
                                                <td style={{ border: "1px solid silver" }}>{val.nom}</td>
                                                <td style={{ border: "1px solid silver" }}>
                                                    {
                                                        val.specialistes.map((val) => {
                                                            return (
                                                                <td>
                                                                    <td style={{ border: "1px solid silver" }}>{val.nom} {val.postnom} {val.prenom}
                                                                        <br/> {val.telephone}</td>
                                                                </td>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td style={{ border: "1px solid silver" }}>
                                                    {
                                                        val.specialites.map((val) => {
                                                            return (
                                                                <td style={{ border: "1px solid silver" }}>
                                                                    {val.nom} <br /> {val.description}</td>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td style={{ border: "1px solid silver" }}>{ val.description}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default DetailGaragePlus
