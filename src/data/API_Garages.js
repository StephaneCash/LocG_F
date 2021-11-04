import axios from 'axios';

const url = "http://localhost:8000/api";

export default {
    getAllgarages: () =>
        axios.get(`${url}/garages`),
    getOnegarage: (id) =>
        axios.get(`${url}/garages/${id}/edit`),
    addgarage: (garage) =>
        axios.post(`${url}/garages`, garage),
    updategarage: (garage, id) =>
        axios.put(`${url}/garages`, garage),
    deletegarage: (id) =>
        axios.delete(`${url}/garages/${id}`),
}