import * as React from 'react'
import 'jest-dom/extend-expect'
import {wait} from 'dom-testing-library'
import {render} from '../../utils/testUtils'
import Router, {RouterPath} from '../Router'
import * as faker from 'faker'
import 'react-testing-library/cleanup-after-each'

describe('<Router/>', () => {
	it('should render Home page by default', async () => {
		// Action
		const {getByTestId} = render(<Router />)

		// Assert
		expect(getByTestId('suspense')).toBeInTheDocument()
		await wait(() => expect(getByTestId('home-page')).toBeInTheDocument())
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

	it('should render About page when go to path /about', async () => {
		// Action
		const {getByTestId} = render(<Router />, {
			route: RouterPath.about,
		})

		// Assert
		expect(getByTestId('suspense')).toBeInTheDocument()
		await wait(() => expect(getByTestId('about-page')).toBeInTheDocument())
	})
})
