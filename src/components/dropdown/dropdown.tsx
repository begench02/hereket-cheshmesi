import { FC, ReactNode } from 'react'
import styles from './dropdown.module.sass'

export const Dropdown: FC<DropdownProps> = (props) => {
	const { title, children } = props

	return (
		<div className={styles.dropdown}>
			{title}
			<ul className={styles.menu}>{children}</ul>
		</div>
	)
}

type DropdownProps = {
	children: ReactNode
	title: ReactNode
}
