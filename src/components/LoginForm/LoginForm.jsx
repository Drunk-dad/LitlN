import React from 'react'
import { Field, Form } from 'react-final-form'
import s from './LoginForm.module.css'

const LoginForm = () => {


	const onSubmit = async (values) => console.log(values)



	return (
		<>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit, form, submitting, pristine, values }) => {

					// console.log(form);
					return (
						<>
							<form onSubmit={handleSubmit} >
								<div className={s.wrapper}>
									<div>
										<label className={s.label}>Логин</label>
										<Field
											name="login"
											className={s.input}
											component="input"
											type="text"
											placeholder="Логин"
										/>
									</div>
									<div>
										<label className={s.label}>Пароль</label>
										<Field
											name="password"
											className={s.input}
											component="input"
											type="password"
											placeholder="Пароль" />
									</div>
									<button type="button" onClick={form.submit}>Login</button>
									<button type="button" onClick={form.reset} >reset</button>
								</div>
							</form>
						</>
					)
				}
				}
			/>
		</>
	)
}
export default LoginForm
