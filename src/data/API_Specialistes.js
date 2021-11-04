import axios from "axios";

const url = "http://localhost:8000/api";

export default {
    getAllspecialistes: () =>
        axios.get(`${url}/specialistes`),
    getOnespecialiste: (id) =>
        axios.get(`${url}/specialistes/${id}/edit`),
    addspecialiste: (specialiste) =>
        axios.post(`${url}/specialistes`, specialiste),
    updatespecialiste: (specialiste, id) =>
        axios.put(`${url}/specialistes`, specialiste),
    deletespecialiste: (id) =>
        axios.delete(`${url}/specialistes/${id}`),
}