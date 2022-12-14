import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => (
    axios 
        .get(baseUrl)
        .then(response => response.data)
)

const create = (newObject) => (
    axios
        .post(baseUrl, newObject)
        .then(response => response.data)
)

const remove = (id) => {
    axios
        .delete(`${baseUrl}/${id}`)
}

const update = (updatedObject) => (
    axios
        .put(`${baseUrl}/${updatedObject.id}`, updatedObject)
        .then(response => response.data)
)

const services = { getAll, create, remove, update }

export default services