import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import "../css/Garages.css";
import React, { useState, useRef, useEffect } from "react";

function FindGarage() {
    return (
        <>
            <Header></Header>
            <div className='main-content'>
                <UpComponent />
                <main>
                    <div className="mainDiv">
                        Garages

                    </div>
                </main>
            </div>
        </>
    )
}
export default FindGarage