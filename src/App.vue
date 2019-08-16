<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="avatar">
          <a-avatar icon="user" size="large">U</a-avatar>
        </div>

        <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline" v-on:select="selectItem">
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>按钮</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>列表</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" />
              <span>图表</span>
            </span>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="team" />
              <span>其他</span>
            </span>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header class="layout-header">
          <a-row type="flex">
            <a-col :span="12"  style="display:flex,align-items:flex-start">

<div style="background:red,display:flex,align-items:flex-start" >   <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
              /></div>

            
            </a-col>


            <a-col :span="12" >
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" href="#">
                  <a-icon type="plus" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-col>
          </a-row>
        </a-layout-header>

        <a-layout-content
          :style="{ margin: '1px 12px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <transition v-bind:name="transitionName" mode="out-in">
            <router-view />
          </transition>
        </a-layout-content>

        <a-layout-footer
          style="text-align: center"
        >Ant Design ©2018 Created by Tango(iamtango@foxmail.com)</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  pages: "",
  data() {
    return {
      collapsed: false,
      content: "default",
      pages: ["/button", "/list", "/login"]
    };
  },
  methods: {
    selectItem: function({ item, key, selectedKeys }) {
      this.$router.push(this.pages[key - 1]);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#components-layout-demo-custom-trigger {
  height: 100%;
  font-size: 48px;
}

#components-layout-demo-custom-trigger .avatar {
  margin-bottom: 16px;
  padding: 16px 16px;
}

#components-layout-demo-custom-trigger .layout-header {
  /* display: flex; */
  background: #fff;
  padding: 0;
  /* align-items: flex-start; */

  margin-bottom: 16px;
  padding: 0 16px;
}

#components-layout-demo-custom-trigger .trigger {
  align-self: left;
  font-size: 24px;
  line-height: 64px;
  padding: 0 0;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
