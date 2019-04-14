/**
 * Root API abstract
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import axios from 'axios'

let api: any
let baseUrl: string = process.env.API_ENDPOINT
	? process.env.API_ENDPOINT
	: 'https://jsonplaceholder.typicode.com'

const getData = res => res.data

const joinUrl = (endpoint, params?, query?): string => {
	let joinedUrl = `${endpoint}`
	if (params) {
		joinedUrl = joinedUrl + '/' + params
	}
	if (query) {
		joinedUrl = joinedUrl + '/' + query
	}
	return joinedUrl
}

const requests = {
	get: (endpoint: string, params?, query?) =>
		api.get(joinUrl(endpoint, params, query)).then(getData),
	post: (endpoint: string, params?, query?) =>
		api.post(joinUrl(endpoint, params, query)).then(getData),
	put: (endpoint: string, params?, query?) =>
		api.put(joinUrl(endpoint, params, query)).then(getData),
	delete: (endpoint: string, params?, query?) =>
		api.delete(joinUrl(endpoint, params, query)).then(getData),
}

export const posts = {
	get: () => requests.get('posts'),
}

export const post = {
	get: (id: string) => requests.get('/posts', id),
}

export const comments = {
	get: (id?: string) => requests.get('/comments', id),
}

api = axios.create({baseURL: baseUrl})
export {api}
