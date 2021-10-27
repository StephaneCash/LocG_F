import axios from "axios";

const url = "http://localhost:8000/api";

export default {
    getAllSpecialites: () =>
        axios.get(`${url}/specialites`),
    getOneSpecialite: (id) =>
        axios.get(`${url}/specialites/${id}/edit`),
    addSpecialite: (specialite) =>
        axios.post(`${url}/specialites`, specialite),
    updateSpecialite: (specialite, id) =>
        axios.put(`${url}/specialites`, specialite),
    deleteSpecialite: (id) =>
        axios.delete(`${url}/specialites/${id}`),
}