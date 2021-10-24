import React, { useState } from 'react'
import { Button, Card, Input } from 'antd'
import { addClient, getClients } from '../api'

export default function ClientForm () {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    const [submitted, setSubmitted] = useState(false)

    function submit () {
        addClient(state)

        setSubmitted(true)
    }

    return (
        <>
            {submitted === false &&
                <Card style={{ maxWidth: '1000px', margin: '10px auto', textAlign: 'center' }} title='Enter your details below to proceed'>
                    <Input style={{ display: 'block', maxWidth: '250px', margin: '10px auto' }} placeholder='First Name' type='text' onChange={e => setState({ ...state, firstName: e.target.value })} />
                    <Input style={{ display: 'block', maxWidth: '250px', margin: '10px auto' }} placeholder='Last Name' type='text' onChange={e => setState({ ...state, lastName: e.target.value })} />
                    <Input style={{ display: 'block', maxWidth: '250px', margin: '10px auto' }} placeholder='Email' type='text' onChange={e => setState({ ...state, email: e.target.value })} />
                    <Input style={{ display: 'block', maxWidth: '250px', margin: '10px auto' }} placeholder='Phone' type='text' onChange={e => setState({ ...state, phone: e.target.value })} />
                    <Button onClick={submit}>Submit</Button>
                </Card>}
            {submitted === true &&
                <Card style={{ maxWidth: '1000px', margin: '10px auto', textAlign: 'center' }} title='Thank you!'>
                    <Button onClick={() => alert('chahoo')}><a href={``}>Continue!</a></Button>
                </Card>}
        </>
    )
}