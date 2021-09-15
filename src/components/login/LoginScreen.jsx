import React, {useContext} from 'react'
import Button from '@material-ui/core/Button'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin =()=> {
      
        dispatch({
            type: types.login,
            payload: {
                name: 'Katherine Almache'
            }
        });
        history.replace('/');

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


