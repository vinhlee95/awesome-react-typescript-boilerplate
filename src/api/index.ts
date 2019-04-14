/**
 * Root API abstract
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import axios from 'axios'

let baseUrl: string = process.env.API_ENDPOINT
	? process.env.API_ENDPOINT
	: 'https://jsonplaceholder.typicode.com'

export const api: any = axios.create({baseURL: baseUrl})

const getData = res => res.data
const joinUrl = (path, params?, query?): string => {
	let joinedUrl = `${path}`
	if (params) {
		joinedUrl = joinedUrl + '/' + params
	}
	if (query) {
		joinedUrl = joinedUrl + '/' + query
	}
	return joinedUrl
}

export const requests = {
	get: (path: string, params?, query?) =>
		api.get(joinUrl(path, params, query)).then(getData),
	post: (path: string, params?, query?) =>
		api.post(joinUrl(path, params, query)).then(getData),
	put: (path: string, params?, query?) =>
		api.put(joinUrl(path, params, query)).then(getData),
	delete: (path: string, params?, query?) =>
		api.delete(joinUrl(path, params, query)).then(getData),
}
