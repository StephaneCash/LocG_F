import React from 'react'
import "../css/DashBoard.css"
import "../css/Hedaer.css"
import Header from '../view/Header'
import UpComponent from '../view/UpComponent';

function DetailGaragePlus() {
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
                                <th style={{ width: "260px" }}>Actions</th>
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
