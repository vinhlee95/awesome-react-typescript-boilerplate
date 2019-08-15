/**
 * Root API abstract
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {stringify} from 'query-string'

const baseUrl: string =
	process.env.API_ENDPOINT || 'https://jsonplaceholder.typicode.com'

export const api: AxiosInstance = axios.create({baseURL: baseUrl})

const getData = (res: AxiosResponse) => res.data
const joinUrl = (path: string, query?: object): string => {
	let joinedUrl = path

	if (query) {
		joinedUrl = joinedUrl + `?${stringify(query)}`
	}

	return joinedUrl
}

export const getRequest = (path: string, query?: object) =>
	api.get(joinUrl(path, query)).then(getData)

export const postRequest = (
	path: string,
	body: object,
	params?: string,
	query?: object,
) => api.post(joinUrl(path, query), body).then(getData)

export const putRequest = (
	path: string,
	body: object,
	params?: string,
	query?: object,
) => api.put(joinUrl(path, query), body).then(getData)

export const deleteRequest = (path: string, query?: object) =>
	api.delete(joinUrl(path, query)).then(getData)
