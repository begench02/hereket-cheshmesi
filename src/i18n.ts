import { initReactI18next } from 'react-i18next'
import enJson from './locale/en.json'
import i18n from 'i18next'
import ruJson from './locale/ru.json'

i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	debug: true,
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: {
				...enJson,
			},
		},
		ru: {
			translation: {
				...ruJson,
			},
		},
	},
})

export default i18n
