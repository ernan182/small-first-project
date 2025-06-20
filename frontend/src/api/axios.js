import axios from 'axios'

const instansce = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials:true
})

export default instansce