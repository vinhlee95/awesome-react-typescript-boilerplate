import * as React from 'react'
import 'jest-dom/extend-expect'
import {renderWithStore} from '../../../utils/testUtils'
import Home from '../Home'

describe('<Home/>', () => {
	it('should render Welcome text', () => {
		// Act
		const {getByText} = renderWithStore(<Home />)

		// Assert
		expect(getByText('common.welcome')).toBeInTheDocument()
	})
})
