import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../view/DashBoard';
import Specialistes from '../view/Specialistes';
import FindGarage from "../view/FindGarage";
import Garages from "../view/Garages";
import DetailGaragePlus from '../modal/DetailGaragePlus';
import Connexion from '../view/Connexion';
import Register from '../view/Register';
//import RoutesProtected from './RoutesProtected';

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Connexion} />
                    <Route path="/home" exact component={DashBoard} />
                    <Route path="/specialistes" exact component={Specialistes} />
                    <Route path="/findgarages" exact component={FindGarage} />
                    <Route path="/garages" exact component={Garages} />
                    <Route path="/detailsGarage" exact component={DetailGaragePlus} />
                    <Route path="/register" exact component={Register} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Routes