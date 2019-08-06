import produce from 'immer'
import {getType} from 'typesafe-actions'
import {startFetching, endWithError, updateData} from './commons/common'
import useModuleEpic from './commons/moduleEpics'

import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'posts'
const path = '/posts'

export const {actions, moduleEpics} = useModuleEpic(moduleName, path)
const {getAsync} = actions

// ------------------------------------
// Reducer
// ------------------------------------

export type PostsState = ModelState<Post[]>

const initialState: PostsState = {
	data: [],
	status: 'idle',
	error: null,
}

const posts = (state = initialState, action: any) =>
	produce(state, draft => {
		switch (action.type) {
			case getType(getAsync.request):
				startFetching(draft)
				break
			case getType(getAsync.success):
				updateData(draft, action.payload)
				break
			case getType(getAsync.failure):
				endWithError(draft, action.payload.message)
				break
		}
	})

export const reducer = posts

// ------------------------------------
// Actions
// ------------------------------------

export const getPosts = () => getAsync.request({})
export const cancelGetPosts = () => getAsync.cancel()
