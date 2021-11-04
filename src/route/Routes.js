import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../view/DashBoard';
import Specialistes from '../view/Specialistes';
import FindGarage from "../view/FindGarage";
import Garages from "../view/Garages"

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/specialistes" exact component={Specialistes} />
                    <Route path="/findgarages" exact component={FindGarage} />
                    <Route path="/garages" exact component={Garages} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Routes