import { FC } from 'react'
import styles from './accordion.module.sass'

export const Accordion: FC<AccordionProps> = (props) => {
	const {
		options: { title, elements },
	} = props

	return (
		<ul className={styles.accordion}>
			<li>
				<input type='checkbox' name='accordion' id={title} />
				<label htmlFor={title}>
					<button className={styles.accordion_button}>
						<span></span>
						<span></span>
					</button>
					{title}
				</label>
				<div className={styles.accordion_content}>
					{elements.map((element) => (
						<p>{element}</p>
					))}
				</div>
			</li>
		</ul>
	)
}

type AccordionProps = {
	options: {
		title: string
		elements: string[]
	}
}
