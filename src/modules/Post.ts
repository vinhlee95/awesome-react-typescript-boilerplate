import produce from 'immer'
import {getType} from 'typesafe-actions'
import {
	startFetching,
	updateData,
	endWithError,
	endCanceling,
} from './commons/common'
import useModuleEpic from './commons/moduleEpics'

import Post from '../models/Post'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'post'
const path = '/posts'

export const {actions, moduleEpics} = useModuleEpic(moduleName, path)
const {getAsync} = actions

// ------------------------------------
// Reducer
// ------------------------------------

export type PostState = ModelState<Post>

const initialState: ModelState<Post> = {
	data: null,
	status: 'idle',
	error: null,
}

const post = (state = initialState, action: any) =>
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
			case getType(getAsync.cancel):
				endCanceling(draft)
				break
		}
	})

export const reducer = post

// ------------------------------------
// Actions
// ------------------------------------

export const getPost = (id: string) => getAsync.request({params: id})
export const cancelGetPost = () => getAsync.cancel()
