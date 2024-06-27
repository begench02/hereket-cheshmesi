import { FC } from 'react'
import styles from './textarea.module.sass'

export const Textarea: FC<TextareaProps> = (props) => {
	const { placeholder } = props

	return <textarea placeholder={placeholder} className={styles.textarea} />
}

type TextareaProps = {
	placeholder: string
}
