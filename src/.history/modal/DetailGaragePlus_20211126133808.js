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
                                                <td>{val.nom}</td>
                                                <td>
                                                    {
                                                        val.specialistes.map((val) => {
                                                            return (
                                                                <>
                                                                    <td>{val.nom} {val.postnom} {val.prenom}</td>
                                                                    <td>{val.telephone}</td>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.specialites.map((val) => {
                                                            return (
                                                                <td></td>
                                                            )
                                                        })
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </main>
            </div>

        </div>
    )
}

export default DetailGaragePlus
