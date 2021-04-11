import { observable, action, computed } from 'mobx'

export class TodosStore {

  constructor (appStore) {
    this.appStore = appStore
  }

  @observable
  todos = []

  @action
  addTodo (todo) {
    this.todos.push({
      id: Date.now(),
      todo,
      completed: false,
    })
  }

  @action
  changeCompletedById (id, completed) {
    this.todos.forEach(item => {
      if (item.id === id) {
        item.completed = completed
      }
    })
  }

  @action
  changeAllCompleted (completed) {
    this.todos.forEach(item => {
      item.completed = completed
    })
  }

  @action
  deleteTodoById (id) {
    this.todos = this.todos.filter(item => item.id !== id)
  }

  @action
  deleteAllCompleted () {
    this.todos = this.todos.filter(item => !item.completed)
  }

  @action
  changeEditById (id, todo) {
    this.todos.forEach(item => {
      if (item.id === id) {
        item.todo = todo
      }
    })
  }

  @computed
  get todosLength () {
    return this.todos.length
  }

  @computed 
  get completedTodosLength () {
    return this.todos.filter(item => item.completed).length
  }

  @computed 
  get uncompletedTodosLength () {
    return this.todos.filter(item => !item.completed).length
  }

}