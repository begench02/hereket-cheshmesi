export const textShortener = (text: string) => {
	let newText = text
	if (text.length >= 100) {
		newText = text.slice(0, 100)
	}
	return `${newText}...`
}

import { PhoneNumberUtil } from 'google-libphonenumber'
import { Day, Place } from 'pages/tours/tours.data'

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
