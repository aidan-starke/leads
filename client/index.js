import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import 'antd/dist/antd.css'

document.addEventListener('DOMContentLoaded', () => {
	render(
		<App />,
		document.getElementById('app')
	)
})
