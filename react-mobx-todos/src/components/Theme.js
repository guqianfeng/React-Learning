import React from 'react'

import {observer} from 'mobx-react'
import {useStores} from '../hooks/use-stores'

export default observer(function Theme() {

    const {themeStore} = useStores()

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
