import * as React from 'react'
import 'jest-dom/extend-expect'
import {renderWithRouter} from '../../../../utils/testUtils'
import Nav from '../Nav'

describe('<About/>', () => {
	it('should render Nav', () => {
		// Act
		const {getByText} = renderWithRouter(<Nav />)

		// Assert
		expect(getByText('nav.home')).toBeInTheDocument()
		expect(getByText('nav.about')).toBeInTheDocument()
	})
})
