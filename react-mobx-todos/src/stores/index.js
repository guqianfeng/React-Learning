import {CounterStore} from './counter'
import {ThemeStore} from './theme'

class AppStore {
    constructor() {
        this.counterStore = new CounterStore(this)
        this.themeStore = new ThemeStore(this)
    }
}

const store = new AppStore()
export default store;