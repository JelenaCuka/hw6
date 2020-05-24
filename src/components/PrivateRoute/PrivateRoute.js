import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import sessionStore from '../../stores/sessionStore/sessionStore';
import { observer, inject } from 'mobx-react';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const session = rest.sessionStore;

    return <Route {...rest} render={(props) => {
        return session.getIsActive() === true ? <Component {...props} /> : <Redirect to='/login' />
    }} />
}

function mapServicesToProps() {
    return {
        sessionStore
    }
}

export default inject(mapServicesToProps)(observer(PrivateRoute));