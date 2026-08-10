import { AddNewLanguageFeature } from '../../../features/moderation'
import { LanguagesCardsWidget } from '../../../widgets/moderation'
import styles from './Languages.module.scss'

export const LanguagesModerationPage = () => {
	return (
		<section className={styles.wrapper}>
			<AddNewLanguageFeature className={styles.whiteButton} />
			<LanguagesCardsWidget />
		</section>
	)
}
