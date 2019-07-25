/**
 * Root epic
 *
 * @author Huy Trinh <dinhhuyams@gmail.com>
 *
 */

import {combineEpics} from 'redux-observable'
import {moduleEpics as postEpics} from '../modules/Post'
import {moduleEpics as postsEpics} from '../modules/Posts'
import {appEpics} from '../modules/App'

export const createRootEpic = () => {
	return combineEpics(...postEpics, ...postsEpics, ...appEpics)
}
