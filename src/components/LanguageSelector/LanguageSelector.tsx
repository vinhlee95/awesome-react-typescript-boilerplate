import * as React from 'react'
import {useTranslation} from 'react-i18next'
import {Language} from '../../services/i18n'

interface Props {
	onChangeLanguage: (language: string) => void
}

const LanguageSelector = (props: Props) => {
	const [t, i18n] = useTranslation()

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		props.onChangeLanguage(e.target.value)
	}

	return (
		<select
			data-testid="language-selector-component"
			defaultValue={i18n.language}
			onChange={changeLanguage}
		>
			<option value={Language.en}>{t('common.en')}</option>
			<option value={Language.de}>{t('common.de')}</option>
		</select>
	)
}

export default LanguageSelector
