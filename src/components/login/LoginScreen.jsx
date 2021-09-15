import React from 'react'
import Button from '@material-ui/core/Button'

export const LoginScreen = ({history}) => {

    const handleLogin =()=> {
        history.push('/');
    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen xd</h1>
            <hr />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
        </div>
    )

}


