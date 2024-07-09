import { PhoneNumberUtil } from 'google-libphonenumber'
import { Place } from 'pages/tours/tours.data'
import toast from 'react-hot-toast'

const phoneUtil = PhoneNumberUtil.getInstance()

export const is_phone_valid = (phone: string) => {
	try {
		return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
	} catch (error) {
		return false
	}
}

export const concat_places_name = (places: Place[]): string => {
	const joined_names = places.reduce((accumulator, place, index) => {
		if (index === 0) {
			return place.name
		}
		return `${accumulator} - ${place.name}`
	}, places[0].name)

	return joined_names
}

export const copy_text = (text: string, type: 'address' | 'phone' | 'email') => {
	switch (type) {
		case 'email':
			const email = text.replace(/\s/g, '').substring(1)
			navigator.clipboard.writeText(email)
		case 'phone':
			const phone = text.replace(/\s/g, '')
			navigator.clipboard.writeText(phone)
		case 'address':
			const address = text.trim().substring(1)
			navigator.clipboard.writeText(address)
		default:
			toast.success(`${type} copied`)
	}
}
