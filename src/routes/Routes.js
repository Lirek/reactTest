import React from 'react'
import { Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export const Routes = () => {
    
    return [
        <Route exact path='/home' component={Dashboard}/>,
    ]
}
