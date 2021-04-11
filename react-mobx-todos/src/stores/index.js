import {CounterStore} from './counter'
import {ThemeStore} from './theme'
import {TodosStore} from './todos'

class AppStore {
    constructor() {
        this.counterStore = new CounterStore(this)
        this.themeStore = new ThemeStore(this)
        this.todosStore = new TodosStore(this)
    }
}

const store = new AppStore()
export default store;