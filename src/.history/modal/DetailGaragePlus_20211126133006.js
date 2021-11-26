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

    console.log("location : ", data)

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
                        </tbody>
                    </table>
                </main>
            </div>

        </div>
    )
}

export default DetailGaragePlus
