import DialogBox from './dialog-box'
import ListSelector from './list-selector'
import TreeSelector from './tree-selector'

// v1.0
/* ListSelector.install = function(Vue) {
  Vue.component(ListSelector.name, ListSelector)
}

TreeSelector.install = function(Vue) {
  Vue.component(TreeSelector.name, TreeSelector)
}

const install = function(Vue) {
  ListSelector.install(Vue)
  TreeSelector.install(Vue)
} */

// v2.0
/* const installComponent = (Vue, c) => Vue.component(c.name, c)

DialogBox.install = Vue => installComponent(Vue, DialogBox)
ListSelector.install = Vue => installComponent(Vue, ListSelector)
TreeSelector.install = Vue => installComponent(Vue, TreeSelector)

const install = function(Vue) {
  DialogBox.install(Vue)
  ListSelector.install(Vue)
  TreeSelector.install(Vue)
} */

// v3.0
const components = [ DialogBox, ListSelector, TreeSelector ]

const install = Vue =>  components.forEach(c => Vue.component(c.name, c))

export {
  DialogBox,
  ListSelector,
  TreeSelector,
  install
}
export default { install }
