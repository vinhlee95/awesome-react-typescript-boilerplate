import * as React from 'react'
import 'jest-dom/extend-expect'
import {fireEvent, wait} from 'react-testing-library'
import {renderWithStore} from '../../../utils/testUtils'
import {postBuilder} from '../../../utils/mockUtils'
import {getRequest} from '../../../services/api'
import Home from '../Home'

jest.mock('../../../services/api', () => {
	return {getRequest: jest.fn()}
})

describe('<Home/>', () => {
	let mockGetRequest
	let mockPosts
	let mockPost1

	beforeEach(() => {
		// Arrange
		mockGetRequest = getRequest as jest.Mock<any>

		mockPost1 = postBuilder()
		const mockPost2 = postBuilder()
		const mockPost3 = postBuilder()

		mockPosts = [mockPost1, mockPost2, mockPost3]

		mockGetRequest.mockResolvedValue(mockPosts)
	})

	it('should render Welcome text', () => {
		// Act
		const {getByText} = renderWithStore(<Home />)

		// Assert
		expect(getByText('common.welcome')).toBeInTheDocument()
	})

	it('should fetch Posts on mount and display them', async () => {
		// Act
		const {getByText, queryByText} = renderWithStore(<Home />)

		// Assert
		expect(mockGetRequest).toHaveBeenCalledTimes(1)
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
		mockGetRequest.mockRejectedValueOnce(mockError)

		// Act
		const {getByTestId, queryByTestId} = renderWithStore(<Home />)

		// Assert
		expect(getByTestId('loading-post-list')).toBeInTheDocument()

		await wait(() => expect(queryByTestId('loading-post-list')).toBeNull())

		expect(getByTestId('error-post-list')).toHaveTextContent(
			`Error: ${mockErrorMessage}`,
		)
	})

	it('should render Post Detail as default text', () => {
		// Act
		const {getByText} = renderWithStore(<Home />)

		expect(getByText('Post Detail')).toBeInTheDocument()
	})
})
