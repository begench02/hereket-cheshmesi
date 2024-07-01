import { CSSProperties, FC, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './button.module.sass'

export const Button: FC<ButtonProps> = (props) => {
	const { children, variant = 'primary', fullWidth = false, className, style } = props

	console.log('Variant: ', variant)
	return (
		<button
			className={clsx(styles.main, styles[variant], className)}
			style={{ ...style, width: fullWidth ? '100%' : 'auto' }}
		>
			{children}
		</button>
	)
}

type ButtonProps = {
	children: ReactNode
	variant?: Variant
	fullWidth?: boolean
	className?: string
	style?: CSSProperties
}

type Variant = 'primary' | 'contained'
