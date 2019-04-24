import * as React from 'react'
import 'jest-dom/extend-expect'
import {fireEvent, getByText, wait} from 'react-testing-library'
import {renderWithStore} from '../../../utils/testUtils'
import {postBuilder} from '../../../utils/mockUtils'
import {requests as mockRequests} from '../../../services/api'
import Home from '../Home'

describe('<Home/>', () => {
	it('should render Welcome text', () => {
		// Act
		const {getByText} = renderWithStore(<Home />)

		// Assert
		expect(getByText('common.welcome')).toBeInTheDocument()
	})

	it('should fetch and display Posts to the page', async () => {
		// Arrange
		const post1 = postBuilder()
		const post2 = postBuilder()
		const post3 = postBuilder()

		const mockPosts = [post1, post2, post3]

		mockRequests.get = jest.fn(() => Promise.resolve(mockPosts))

		// Act
		const {getByText, queryByText} = renderWithStore(<Home />)

		// Assert
		expect(getByText('Loading ...')).toBeInTheDocument()

		await wait(() => expect(queryByText('Loading ...')).toBeNull())

		mockPosts.forEach(mockPost => {
			expect(getByText(`id: ${mockPost.id}`)).toBeInTheDocument()
			expect(getByText(`title: ${mockPost.title}`)).toBeInTheDocument()
		})
	})

	it('should display error when fetch Posts fail', async () => {
		// Arrange
		const mockErrorMessage = 'This is the error'
		const mockError = new Error(mockErrorMessage)
		mockRequests.get = jest.fn(() => Promise.reject(mockError))

		// Act
		const {getByText, queryByText, getByTestId} = renderWithStore(<Home />)

		// Assert
		expect(getByText('Loading ...')).toBeInTheDocument()

		await wait(() => expect(queryByText('Loading ...')).toBeNull())

		expect(getByTestId('error-post-list')).toHaveTextContent(
			`Error: ${mockErrorMessage}`,
		)
	})

	it('should initially show Post Detail as default text', () => {
		// Act

		const {getByText} = renderWithStore(<Home />)

		expect(getByText('Post Detail')).toBeInTheDocument()
	})
})
