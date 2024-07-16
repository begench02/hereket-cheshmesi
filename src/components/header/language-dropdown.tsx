import { Dropdown } from 'components/dropdown/dropdown'
import { useTranslation } from 'react-i18next'
import Cookie from 'js-cookie'
import russia from 'assets/imgs/icons/russia.png'
import unitedStates from 'assets/imgs/icons/united-states.png'

type Language = 'en' | 'ru'
const languages: Record<Language, string> = {
	en: unitedStates,
	ru: russia,
}

export const LanguageDropdown = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (newLanguage: string) => {
		Cookie.set('lang', newLanguage)
		i18n.changeLanguage(newLanguage)
	}

	return (
		<Dropdown title={<img src={languages[i18n.resolvedLanguage]} alt='Current Language' width='40px' />}>
			{i18n.language === 'ru' ? (
				<li onClick={() => changeLanguage('en')}>
					<img src={unitedStates} alt='United States flag' width='40px' />
				</li>
			) : (
				<li onClick={() => changeLanguage('ru')}>
					<img src={russia} alt='Russian flag' width='40px' />
				</li>
			)}
		</Dropdown>
	)
}
