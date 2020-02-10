import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {routeList} from './route_list'

export default () => {
    return (
        <Switch>
            {routeList.map((item, index) => {
                return (
                    <Route
                        key={index} 
                        path={item.path} 
                        exact={item.exact} 
                        render={item.render}
                    />
                )
            })}
        </Switch>
    )
}