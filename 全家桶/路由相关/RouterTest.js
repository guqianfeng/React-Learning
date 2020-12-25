import React from 'react'

import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom'

function ProductList() {
  return (
    <div>
      <h3>ProductList</h3>
      <ul>
        <li><Link to="/detail/web">web</Link></li>
        <li><Link to="/detail/node">node</Link></li>
      </ul>
    </div>
  )
}

function ProductMgt() {
  return (
    <div>
      <h3>ProductMgt</h3>
      <Link to="/mgt/add">add</Link>
      <Link to="/mgt/search">search</Link>
      <Route path="/mgt/add" component={() => <div>mgt add</div>}/>
      <Route path="/mgt/search" component={() => <div>mgt search</div>}/>
      <Redirect to="/mgt/add"/>
    </div>
  )
}

function Detail({match, history, location}) {
  console.log(match, history, location)
  return (
    <div>
      <h3>Detail</h3>
      <p>{match.params.name}</p>
      <button onClick={history.goBack}>回退</button>
    </div>
  )
}

function Login () {
  return (
    <div>
      login page
    </div>
  )
}

function PrivateRoute ({component: Component, isLogin, ...rest}) {
  return (
    <Route
      {...rest} 
      render={
      props => isLogin ? (
        <Component/>
      ) : (
        <Redirect 
          to={{
            pathname: '/login',
            state: {redirect: props.location.pathname}
          }}
        />
      )
    }/>
  )
}


export default function RouterTest() {
  return (
    <BrowserRouter>
      <h1>Router Test</h1>
      <nav>
        <Link to="/">商品列表</Link>
        <Link to="/mgt">商品管理</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail/:name" component={Detail} />
        <PrivateRoute path="/mgt" component={ProductMgt} isLogin={true}/>
        <Route path="/login" component={Login} />
        <Route component={() => <div>404~~</div>}/>
      </Switch>
    </BrowserRouter>
  )
}
