import axios from './axios'



export const getApplicationsRequest = () => axios.get('/applications')

export const getApplicationRequest = (id) => axios.get(`/application/${id}`)

export const createApplicationRequest = (data) => axios.post('/application',data)

export const editApplicationRequest = (id,data) => axios.put(`/application/${id}`,data)

export const deleteApplicationRequest = (id) => axios.delete(`/application/${id}`)