/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Auth.module.scss'
import { Icon } from '../../shared/ui'
import { API_URL } from '../../shared/config'
import { serverApi } from '../../shared/api'
import { apiInstance } from '../../shared/api/api-instance'

export const AuthPage: React.FC = () => {
	const [localAuthType, setLocalAuthType] = useState(true) // true - signIn, false - signUp

	const [errorMessage, setError] = useState('')
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')

	const onSignIn = async () => {
		try {
			await apiInstance.post(serverApi.uris.posts.localSignIn, {
				email,
				password
			})

			window.location.reload()
		} catch {
			return setError('Email or Password is incorrect.')
		}
	}

	const onSignUp = async () => {
		try {
			await apiInstance.post(serverApi.uris.posts.localSignUp, {
				email,
				password,
				name,
				surname
			})

			window.location.reload()
		} catch (error: any) {
			console.log(error)
			const validationError = error?.response?.data?.error?.message

			if (validationError) {
				return setError('Fields entered incorrect.')
			}

			return setError('User already exists with this email.')
		}
	}

	return (
		<section className={styles.wrapper}>
			<article className={styles.left}>
				<div className={styles.banner}></div>
			</article>

			<article className={styles.right}>
				<h3 className={styles.appName}>CV-Builder</h3>

				{localAuthType && (
					<div
						// method="POST"
						// action={`${API_URL}/${serverApi.uris.posts.localSignIn}`}
						className={classNames(styles.loginPadding, styles.formS)}
					>
						<div className={styles.inputWrapper}>
							<input
								className={styles.s}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email..."
								type="email"
								name="email"
							/>
						</div>
						<div className={styles.inputWrapper}>
							<input
								className={styles.s}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password..."
								type="password"
								name="password"
							/>
						</div>
						{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
						<button className={styles.btn} onClick={() => onSignIn()}>
							<h3 className={styles.title}>Sign In</h3>
						</button>
					</div>
				)}

				{!localAuthType && (
					<div className={classNames(styles.loginPadding, styles.formS)}>
						<div className={styles.inputWrapper}>
							<input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..." />
						</div>
						<div className={styles.inputWrapper}>
							<input name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname..." />
						</div>
						<div className={styles.inputWrapper}>
							<input
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email..."
							/>
						</div>
						<div className={styles.inputWrapper}>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name="password"
								placeholder="Password..."
							/>
						</div>
						<div className={styles.inputWrapper}>
							<input
								type="password"
								value={repeatedPassword}
								onChange={(e) => setRepeatedPassword(e.target.value)}
								name="password"
								placeholder="Repeat password..."
							/>
						</div>
						{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
						<button className={styles.btn} onClick={() => onSignUp()}>
							<h3 className={styles.title}>Sign Up</h3>
						</button>
					</div>
				)}

				<div
					className={styles.textSign}
					onClick={() => (
						setName(''),
						setEmail(''),
						setPassword(''),
						setRepeatedPassword(''),
						setSurname(''),
						setError(''),
						setLocalAuthType((currentValue) => !currentValue)
					)}
				>
					{localAuthType ? 'No Account? Create One.' : 'Have Account? Sign In.'}
				</div>

				<form className={styles.e} method="POST" action={`${API_URL}/${serverApi.uris.posts.signIn}`}>
					<button type="submit" className={styles.btn}>
						<div className={styles.icon}>
							<Icon type="global.google" />
						</div>
						<h3 className={styles.title}>Continue with Google</h3>
					</button>
				</form>
			</article>
		</section>
	)
}
