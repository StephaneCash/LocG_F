import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../view/DashBoard';
import Specialistes from '../view/Specialistes';
import FindGarage from "../view/FindGarage";

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/specialistes" exact component={Specialistes} />
                    <Route path="/findgarages" exact component={FindGarage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Routes