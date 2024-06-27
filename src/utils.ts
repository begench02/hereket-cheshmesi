export const textShortener = (text: string) => {
	let newText = text
	if (text.length >= 100) {
		newText = text.slice(0, 100)
	}
	return `${newText}...`
}

import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

export const is_phone_valid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};