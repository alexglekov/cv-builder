import styles from './GlobalLoader.module.scss'

export const GlobalLoader = () => {
	return (
		<div className={styles.preloader}>
			<div className={styles.row}>
				<div className={styles.item}></div>
				<div className={styles.item}></div>
			</div>
		</div>
	)
}
