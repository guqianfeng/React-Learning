import React from 'react'

import './index.css'

import Header from './header'
import Main from './main'
import Footer from './footer'

export default () => {
    return (
        <div id="todoapp">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}