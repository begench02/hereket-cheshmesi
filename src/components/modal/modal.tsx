import { createPortal } from 'react-dom'
import { type FC, ReactNode, useEffect, useRef } from 'react'
import { useOutsideClick } from 'hooks/use-outside-click.hook'
import styles from './modal.module.sass'

export const Modal: FC<ModalProps> = (props) => {
	const { children, isOpen, close } = props
	const modalRef = useOutsideClick(close)

	if (isOpen === false) {
		return
	}

	return createPortal(
		<div className={styles.main}>
			<div className={styles.content} ref={modalRef}>
				{children}
			</div>
		</div>,
		document.getElementById('modal'),
	)
}

export type ModalProps = {
	children: ReactNode
	isOpen: boolean
	close: VoidFunction
}
