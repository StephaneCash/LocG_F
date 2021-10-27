import "../css/DashBoard.css"
import Header from "./Header"
import UpComponent from "./UpComponent"

function FindGarage() {
    return (
        <>
            <Header></Header>
            <div className='main-content'>
                <UpComponent />
                <main>
                    Find
                </main>
            </div>
        </>
    )
}
export default FindGarage