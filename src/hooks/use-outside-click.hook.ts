import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: VoidFunction) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent | TouchEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

		const timeout_id = setTimeout(() => document.addEventListener('click', handleClickOutside), 0)
		return () => {
			clearTimeout(timeout_id)
			document.removeEventListener('click', handleClickOutside)
		}
	}, [callback])

	return ref
}
