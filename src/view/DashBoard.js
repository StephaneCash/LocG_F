import "../css/DashBoard.css";
import Header from "./Header";
import UpComponent from "./UpComponent";
import { Link } from "react-router-dom";
import API_Garages from "../data/API_Garages";
import { useState, useEffect } from "react";
import API_Specialistes from "../data/API_Specialistes";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function DashBoard(props) {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [etatLoad, setEtatLoad] = useState(true);
    const [specialistes, setSpecialiste] = useState([]);
    const [com, setCom] = useState([]);

    const fetchData = () => {
        API_Garages.getAllgarages().then(res => {
            const garages = res.data;
            setEtat(true);
            setEtatLoad(false);
            setData(garages);
        })
    }

    const commune = () => {
        axios.get(`http://localhost:8000/api/communes`).then(res => {
            const communes = res.data;
            setCom(communes);
        }).catch(error => {
            console.log(error);
        })
    }

    const fetchDataSpec = () => {
        API_Specialistes.getAllspecialistes().then(res => {
            const specialistes = res.data;
            setEtat(true);
            setEtatLoad(false);
            setSpecialiste(specialistes);
        })
    }

    let comLabels = [];

    let dataCom = [];

    if (com.length > 0) {
        for (const dataObj of com) {

            comLabels.push(dataObj.nom);

            for (const dataOb of dataObj.garages) {
                dataCom.push(parseInt(dataOb.id));
            }
        }
    }

    useEffect(() => {
        fetchData();
        commune();
    }, []);

    useEffect(() => {
        fetchDataSpec();
    }, [])

    const dataCommunes = {

        labels: comLabels,

        datasets: [
            {

                label: 'Garages',
                data: dataCom,
                fill: false,
                backgroundColor: 'black',
                borderColor: '#027581',
                width: "23px"
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };


    return (
        <>
            <Header />
            <div className="main-content">
                <UpComponent
                    valueInput={valueSearch}
                />

                <main>
                    <h4 className="dash-title"> <i className="fa fa-dashboard"> </i> Dashboard</h4>

                    <div className="dash-cards">
                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div>
                                    <h5>Nombre de Garages</h5>
                                    <h4>{data.length}</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/garages">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div>
                                    <h5>Spécialités</h5>
                                    <h4>0</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="">Voir tout</Link>
                            </div>
                        </div>

                        <div className="card-single">
                            <div className="card-body">
                                <span className="fa fa-gear"></span>
                                <div>
                                    <h5>Spécialistes</h5>
                                    <h4>{specialistes.length}</h4>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/specialistes">Voir tout</Link>
                            </div>
                        </div>
                    </div>

                    <section className="recent">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mt-3">
                                        <div className="card-header">Statistiques par commune</div>
                                        <div className="card-body">
                                            <Line
                                                data={dataCommunes}
                                                options={options}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mt-3">
                                        <div className="card-header">Fréquentation de recherche</div>
                                        <div className="card-body">
                                            <i style={{ fontSize: "14pxpx" }}>Lingwala 10%</i> <br />

                                            <div className="progress progress-md" style={{marginBottom:"15px"}}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '10%', backgroundColor: "#6f2c34", }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                            <i className="mt-3" style={{ fontSize: "14pxpx", }}>Gombe 20%</i> <br />

                                            <div className="progress progress-md" style={{marginBottom:"15px"}}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '20%', backgroundColor: "#027581" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <i style={{ fontSize: "14pxpx" }}>Kinshasa 0%</i> <br />

                                            <div className="progress progress-md mt-3">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '0%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default withRouter(DashBoard);