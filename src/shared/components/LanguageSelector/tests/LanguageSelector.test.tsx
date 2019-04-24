import * as React from 'react'
import {fireEvent, render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import LanguageSelector from '../LanguageSelector'
import {Language} from '../../../../constants'
import {enumToValues} from '../../../../utils/utils'

const renderLanguageSelector = () => {
	// Arrange
	const mockOnChangeLanguage = jest.fn()

	const utils = render(
		<LanguageSelector onChangeLanguage={mockOnChangeLanguage} />,
	)

	return {...utils, mockOnChangeLanguage}
}

describe('<Post/>', () => {
	it('should render Language selectors with all options', () => {
		// Act
		const {getByText, debug} = renderLanguageSelector()

		// Assert
		enumToValues(Language).forEach(language => {
			expect(getByText(`common.${language}`)).toBeInTheDocument()
		})
	})
})
