<template>
  <div class="navbar">
    <div class="menu-toggle-btn" @click="toggleMenu">
      <i class="iconfont" :class="sidebarCollapse?'icon-indent':'icon-outdent'"></i>
    </div>
    <screenfull class="screenfull-btn"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Screenfull from '@/components/Screenfull/index.vue'
export default {
  components: { Screenfull },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'sidebarCollapse'
    ])
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('app/setSidebarCollapse', !this.sidebarCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  position: relative;
  width: 100%;
  height: 50px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .menu-toggle-btn{
    position: absolute;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
    width: 50px;
    height: 100%;
    padding: 15px;
    i{
      font-size: 20px;
    }
    &:hover{
      background: #F2F6FC;
    }
  }
  .screenfull-btn{
    position: absolute;
    right: 100px;
    top:15px;
  }
}
</style>
