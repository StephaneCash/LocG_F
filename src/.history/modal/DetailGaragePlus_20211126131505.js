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
                    Details
                </main>
            </div>

        </div>
    )
}

export default DetailGaragePlus
