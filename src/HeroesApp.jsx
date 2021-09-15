import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {

    const init =() => {
        return JSON.parse(localStorage.getItem('user')) || {logged: false } 
    }

    const [user, dispatch] = useReducer(authReducer, {}, init);

    //lo guardo en localsotrage para no perde el dato cuando el user cambie
    useEffect(() => {
        
        localStorage.setItem('user',JSON.stringify(user))
    }, [user])


    return (

        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter></AppRouter>
        </AuthContext.Provider>
      
    )
}
