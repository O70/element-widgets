<template>
  <el-table
    ref="table"
    style="width: 100%;"
    stripe
    border
    fit
    highlight-current-row
    :data="data"
    :height="height"
    :max-height="maxHeight"
    :size="size"
    @select="handleSelect"
    @select-all="handleSelectAll"
    @selection-change="handleSelectionChange"
    @row-click="handleRowClick"
    @row-dblclick="handleRowDblclick">
    <slot>
      <el-table-column label="Columns" align="center"></el-table-column>
    </slot>

    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </el-table>
</template>
<script>
import TableMixin from '../../../src/mixins/table'

export default {
  name: 'ThxTable',
  mixins: [TableMixin],
  methods: {
    rowSelection(ids = []) {
      this.$nextTick(() => {
        const table = this.$refs.table
        table.clearSelection()
        this.data.filter(row => ids.includes(row.id))
          .forEach(row => table.toggleRowSelection(row, true))
      })
    } 
  }
}
</script>
