import {observable, action, computed} from 'mobx'

export class CounterStore {

    constructor (appStore) {
        this.appStore = appStore
    }

    @observable
    count = 0

    @action
    increment () {
        this.count++
        console.warn('increment', this.count)
    }

    @action
    decrement () {
        this.count--
        console.warn('decrement', this.count)
    }

    @computed
    get doubleCount () {
        return this.count * 2
    }
}