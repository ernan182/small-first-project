import axios from './axios.js'

export const registerRequest = (data) =>  axios.post('/register', data)//.then((response => console.log(response))).catch((e) => console.log(e))
export const loginRequest = (data) => axios.post('/login', data)
export const logoutRequest = () => axios.get('/logout')
export const profileRequest = () => axios.get('/profile');
export const profileUpdateRequest = (data) => axios.put('/profile',data);
export const validateRequest = () => axios.get('/validate').catch(error => {
    if (error.response && error.response.status === 400) {
      // Expected error, do nothing
    } else {
      
    }
  });