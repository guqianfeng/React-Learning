import {observable, action} from 'mobx'

export class ThemeStore {

    constructor (appStore) {
        this.appStore = appStore
    }

    @observable
    theme = 'light'

    @action
    setTheme (newTheme) {
        this.theme = newTheme
        console.warn('setTheme', this.theme)
    }
}