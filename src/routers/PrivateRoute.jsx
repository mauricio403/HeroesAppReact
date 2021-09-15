import React from 'react'
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {




    return (
       <Route
         {...rest}
         component={(props) =>(
             (isAuthenticated) ? <Component {...props}></Component>
             :
             <Redirect to ='/login'></Redirect>
         )}
       ></Route>
    )
}

PrivateRoute.prototype={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}