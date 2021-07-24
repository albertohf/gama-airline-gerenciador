import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import User from '../components/user/user'
import Products from '../components/products/product'

/*Mapeamento dos links aos componentes*/
export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={User} />
        <Route exact path="/products" component={Products} />
        <Redirect from="*" to="/" />
    </Switch>


