import { TechnologiesCardsWidget } from '../../../widgets/moderation'
import { CreateTechnologiesGroupFeature } from '../../../features/moderation'
import styles from './Technologies.module.scss'

export const TechnologiesModerationPage = () => {
	return (
		<section className={styles.wrapper}>
			<CreateTechnologiesGroupFeature className={styles.whiteButton} />
			<TechnologiesCardsWidget />
		</section>
	)
}
