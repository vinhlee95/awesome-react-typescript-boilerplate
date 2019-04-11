import axios from 'axios'

const axiosClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	responseType: 'json',
})

export default axiosClient
