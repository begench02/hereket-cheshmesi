import { CSSProperties, FC, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './button.module.sass'

export const Button: FC<ButtonProps> = (props) => {
	const { children, variant = 'primary', className, style } = props

	return (
		<button className={clsx(styles.main, styles[variant], className)} style={style}>
			{children}
		</button>
	)
}

type ButtonProps = {
	children: ReactNode
	variant?: Variant
	className?: string
	style?: CSSProperties
}

type Variant = 'primary' | 'contained'
