import {
  action,
  observable,
  toJS
} from 'mobx'

class Store {
  // Small function that will run fn after waiting 1 second.
  dummyAsync = async (fn) => {
    return new Promise((resolve, reject) => {
      this.isLoading = true
      setTimeout(() => {
        try {
          resolve(fn())
        } catch (e) {
          reject(e)
        } finally {
          this.isLoading = false
        }
      }, 1000)
    })
  }

  @observable isLoading = false

  @observable data = []

  @action
  async loadData () {
    console.log('Loading data...')

    this.data = await this.dummyAsync(() => {
      return ['dog', 'cat']
    })
  }

  @action
  async addData () {
    const animal = await this.dummyAsync(() => {
      const choices = ['dog', 'cat', 'mouse', 'fish', 'spider', 'snake']
      return choices[Math.floor(Math.random() * choices.length)]
    })

    this.data.push(animal)
  }
}

var store = new Store()
window.store = store
window.toJS = toJS
export default store

;(async () => {
  await store.loadData()
})()
