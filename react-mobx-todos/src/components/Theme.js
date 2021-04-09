import React from 'react'

import { observer } from 'mobx-react'
import { useThemeStore } from '../hooks'
// import {useStores} from '../hooks/use-stores'

export default observer(function Theme() {

    // const {themeStore} = useStores()

    const themeStore = useThemeStore()
    console.warn(themeStore)

    return (
        <div>
            <div>{themeStore.theme}</div>
            <button onClick={() => {
                themeStore.setTheme('light')
            }}>light</button>
            <button onClick={() => {
                themeStore.setTheme('dark')
            }}>dark</button>
        </div>
    )
})
