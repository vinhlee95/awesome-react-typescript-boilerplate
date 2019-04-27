import * as React from 'react'
import 'jest-dom/extend-expect'
import {wait} from 'dom-testing-library'
import {fireEvent} from 'dom-testing-library'
import {render} from '../../utils/testUtils'
import Router from '../Router'
import {RouterPath} from '../../constants'
import * as faker from 'faker'
import 'react-testing-library/cleanup-after-each'

describe('<Router/>', () => {
	it('should render Home page by default', () => {
		// Action
		const {getByTestId} = render(<Router />)

		// Assert
		expect(getByTestId('suspense')).toBeInTheDocument()
		wait(() => expect(getByTestId('home-page')).toBeInTheDocument())
	})

	it('should render Home page when go to not found path', () => {
		// Arrange
		const notFoundPath = '/' + faker.lorem.word()

		// Action
		const {getByTestId} = render(<Router />, {
			route: notFoundPath,
		})

		// Assert
		expect(getByTestId('home-page')).toBeInTheDocument()
	})

	it('should render About page when go to path /about', () => {
		// Action
		const {getByTestId} = render(<Router />, {
			route: RouterPath.about,
		})

		// Assert
		expect(getByTestId('suspense')).toBeInTheDocument()
		wait(() => expect(getByTestId('about-page')).toBeInTheDocument())
	})
})
