export const textShortener = (text: string) => {
	let newText = text
	if (text.length >= 100) {
		newText = text.slice(0, 100)
	}
	return `${newText}...`
}
