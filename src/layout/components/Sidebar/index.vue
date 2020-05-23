<template>
    <div>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu :collapse="sidebarCollapse" @select="selectItem">
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :route="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
    </div>
</template>

<script>
import { constantRoutes } from '@/router/index.js'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  components: { SidebarItem },
  data () {
    return {
      routes: constantRoutes
    }
  },
  computed: {
    ...mapGetters([
      'sidebarCollapse'
    ])
  },
  methods: {
    selectItem (index, indexpath) {
      if (index.indexOf('href') !== -1) {
        window.open(index.split('_')[1])
        return null
      }
      this.$router.push({
        path: index
        // query: {
        //   t: +new Date()
        // }
      })
    }
  }
}
</script>
