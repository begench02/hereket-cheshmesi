import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './clink.module.sass'

export const CLink: FC<CLinkProps> = (props) => {
	const { to, children } = props

	return (
		<div className={styles.main}>
			<Link to={to} style={{ color: '#103054', fontSize: '20px', fontWeight: 500 }}>
				{children}
			</Link>
		</div>
	)
}

export type CLinkProps = {
	to: string
	children: ReactNode
}
