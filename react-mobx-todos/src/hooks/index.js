import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react'

export const useAppStore = () => {
    const context = useContext(MobXProviderContext);
    return context.store
}

export const useCounterStore = () => {
    const context = useContext(MobXProviderContext)
    return context.store.counterStore
}

export const useThemeStore = () => {
    const context = useContext(MobXProviderContext)
    return context.store.themeStore
}