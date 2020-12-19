import CardBox from '../packages/card-box'
import DialogBox from '../packages/dialog-box'
import InputCarrier from '../packages/input-carrier'
import Pagination from '../packages/pagination'
import PaginationSelection from '../packages/pagination-selection'
import PaginationSelector from '../packages/pagination-selector'
import PaginationTable from '../packages/pagination-table'
import Table from '../packages/table'
import TreeSelection from '../packages/tree-selection'
import TreeSelector from '../packages/tree-selector'

const components = [
  CardBox,
  DialogBox,
  InputCarrier,
  Pagination,
  PaginationSelection,
  PaginationSelector,
  PaginationTable,
  Table,
  TreeSelection,
  TreeSelector
]

const install = Vue =>  components.forEach(c => Vue.component(c.name, c))

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  CardBox,
  DialogBox,
  InputCarrier,
  Pagination,
  PaginationSelection,
  PaginationSelector,
  PaginationTable,
  Table,
  TreeSelection,
  TreeSelector
}

export default { install }
