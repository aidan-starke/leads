import axios from 'axios'

const url = 'api/v1/clients'

export function getClients () {
	return axios.get(url)
		.then(res => {
			console.log(res)
		})
		.catch(err => console.log(err.message))
}

export function addClient (client) {
	return axios.post(`${url}/new`, client)
		.then(res => console.log(res))
		.catch(err => console.log(err.message))
}
