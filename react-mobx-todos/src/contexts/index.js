import React from 'react'
import {CounterStore} from '../stores/counter'
import {ThemeStore} from '../stores/theme'

export const storesContext = React.createContext({
    counterStore: new CounterStore(),
    themeStore: new ThemeStore()
})
