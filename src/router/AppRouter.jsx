import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ROUTE } from '../utils/constants'

import MainPage from '../pages/Main'
import MenuPage from '../pages/Menu'
import EditorPage from '../pages/Editor'
import LoginPage from '../pages/Login'
import Layout from '../components/Layout/Layout'

export function AppRouter() {
	const currentUser = true

	return (
		<>
			<Layout>
				<Routes>
					{/* публичные роуты */}
					<Route path={ROUTE.MAIN} element={<MainPage />} />
					<Route path={ROUTE.MENU} element={<MenuPage />} />
					<Route path={ROUTE.LOGIN} element={<LoginPage />} />
					{/* приватные роуты */}
					<Route
						path={ROUTE.EDITOR}
						element={
							<PrivateRoute user={currentUser}>{<EditorPage />}</PrivateRoute>
						}
					/>

					{/* несуществующая страница */}
					<Route path="*" element={<Navigate to={ROUTE.MAIN} />} />
				</Routes>
			</Layout>
		</>
	)
}

export default AppRouter

const PrivateRoute = ({ user, children }) => {
	return user ? children : <Navigate to={ROUTE.LOGIN} />
}
