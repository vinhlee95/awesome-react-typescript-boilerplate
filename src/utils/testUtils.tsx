import {render as rtlRender} from 'react-testing-library'
import {createStore} from 'redux'
import {configureStore} from '../configStore'

const render = (ui, options) => {
	const store = configureStore()
	return rtlRender(ui, options)
}
