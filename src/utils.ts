import { PhoneNumberUtil } from 'google-libphonenumber'
import { Place } from 'pages/tours/tours.data'
import toast from 'react-hot-toast'

export const is_phone_valid = (phone: string) => {
	const phoneUtil = PhoneNumberUtil.getInstance()

	try {
		return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
	} catch (error) {
		return false
	}
}

export const concat_places_name = (places: Place[], language: 'en' | 'ru'): string => {
	const joined_names = places.reduce((accumulator, place) => {
		if (language === 'en') {
			return accumulator.add(place.name)
		} else {
			return accumulator.add(place.name_ru)
		}
	}, new Set<string>())

	return Array.from(joined_names).join(' - ')
}

export const copy_text = (text: string, type: 'address' | 'phone' | 'email') => {
	switch (type) {
		case 'email':
			const email = text.replace(/\s/g, '').substring(1)
			navigator.clipboard.writeText(email)
			break
		case 'phone':
			const phone = text.replace(/\s/g, '')
			navigator.clipboard.writeText(phone)
			break
		case 'address':
			const address = text.trim().substring(1)
			navigator.clipboard.writeText(address)
			break
	}
	toast.success(`${type} copied`)
}
