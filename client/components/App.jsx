import React from 'react'
import { Button, Card, Input, PageHeader } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import ClientForm from './ClientForm'

const App = () => {
	return (
		<div className='app'>
			<PageHeader
				title='Re/MAX'
				subTitle='Rural Urban Realty'
				style={{ border: '1px solid rgb(235, 237, 240)' }}
				position='fixed'
			/>
			<Content>
				<ClientForm />
			</Content>
		</div>
	)
}

export default App
