<template>
  <thx-card-box title="Case - Pagination Selection Multi">
    <el-row :gutter="10">
      <el-col :span="18">
        <thx-pagination-selection
          multiple
          :data="data"
          :total="total"
          :page.sync="page"
          :size.sync="size"
          :index="{ label: 'No.' }"
          :value.sync="selected">
          <el-table-column prop="id" label="ID" align="center" width="100"></el-table-column>
          <el-table-column prop="account" label="Account" align="center" width="100"></el-table-column>
          <el-table-column prop="name" label="Name" align="center"></el-table-column>
          <el-table-column prop="department" label="Department" align="center"></el-table-column>
          <el-table-column prop="office" label="Office" align="center" width="100"></el-table-column>
        </thx-pagination-selection>
      </el-col>
      <el-col :span="6">
        <thx-table :data="selected">
          <el-table-column type="index" label="No." align="center" width="50"></el-table-column>
          <el-table-column label="ID" align="center">
            <template v-slot:default="scope">
              {{ scope.row }}
            </template>
          </el-table-column>
          <el-table-column align="center" width="60">
            <template v-slot:default="scope">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                circle
                style="padding: 3px;"
                @click="handleDelete(scope.$index)">
              </el-button>
            </template>
          </el-table-column>
        </thx-table>
      </el-col>
    </el-row>
  </thx-card-box>
</template>
<script>
import { getUserPage } from '@/api'

export default {
  name: 'CasePaginationSelectionMulti',
  data() {
    return {
      data: [],
      total: 0,
      page: 1,
      size: 10,
      selected: ['user-4', 'user-8', 'user-13']
    }
  },
  watch: {
    page() {
      this.search()
    },
    size() {
      this.search()
    }
  },
  created() {
    this.search()
  },
  methods: {
    search() {
      getUserPage({
        page: this.page,
        size: this.size
      }).then(({ data, total }) => {
        this.data = data
        this.total = total
      })
    },
    handleDelete(ind) {
      this.selected.splice(ind, 1);
    }
  }
}
</script>
