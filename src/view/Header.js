import "../css/Hedaer.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" />

            <div className='sidebar'>
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span className="fa fa-car"></span>
                        <span style={{ fontSize: "20px" }}> Loc_Dép.</span>
                    </h3>
                    <label for="sidebar-toggle" className="fa fa-list fa-2x"></label>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <NavLink className="" to="/">
                                <span className="fa fa-home"></span>
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to="/specialistes">
                                <span className="fa fa-users"></span>
                                <span>Spécialistes</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to="/garages">
                                <span className="fa fa-book"></span>
                                <span>Garages</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to="/j">
                                <span className="fa fa-folder"></span>
                                <span>Leavels</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to="/i">
                                <span className="fa fa-chevron-right"></span>
                                <span>Projets</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to="/kk">
                                <span className="fa fa-user-o"></span>
                                <span>Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to="/kj">
                                <span className="fa fa-gear"></span>
                                <span>Configuration</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;