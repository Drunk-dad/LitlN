import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
