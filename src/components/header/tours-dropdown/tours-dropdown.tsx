import { Dropdown } from 'components/dropdown/dropdown'
import { Link, useNavigate } from 'react-router-dom'
import { tours } from 'pages/tours/tours.data'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import headerStyles from '../header.module.sass'
import styles from './tours-dropdown.module.sass'

export const ToursDropdown = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const onTourClick = (tour_id: number) => {
		navigate(`tours/${tour_id}`)
	}

	return (
		<Dropdown
			title={
				<Link
					to='/tours'
					className={clsx(
						headerStyles.link__text,
						// currentLink == '#popular-tours' && headerStyles['link__text--active'],
					)}
					// onClick={(e: any) => setCurrentLink(e.target.hash)}
				>
					{t('tours')}
				</Link>
			}
		>
			<div className={styles.menu}>
				{tours.map((tour) => (
					<div key={tour.id} className={styles.menu__item} onClick={() => onTourClick(tour.id)}>
						{tour.title}
					</div>
				))}
			</div>
		</Dropdown>
	)
}
