<<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-icon class = "icon" type="github" theme="filled" />
      <a-avatar class="avatar"  :size=large >U</a-avatar>

      <a-input-search
      class="search" 
      placeholder="input search text"
      size="default"
      @search="onSearch"
    />

      <a-menu
        class="menue"   
        theme="dark"
        mode="horizontal"
        
      >
        <a-menu-item key="1">Pullrequest</a-menu-item>
        <a-menu-item key="2">Issue</a-menu-item>
        <a-menu-item key="3">Market</a-menu-item>
      </a-menu>


      <a-icon type="plus" size="default"/>

    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '3800px' }">Content</div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Tango
    </a-layout-footer>
  </a-layout>
</template>
<style>
#components-layout-demo-fixed .logo {

  margin: 16px 24px 16px 0;
  float: left;
}

#components-layout-demo-fixed .icon {

background: red;
width: 160px;
height: 160px;
  margin: 16px 24px 16px 0;
  float: left;
}


#components-layout-demo-fixed .avatar {

  margin: 16px 24px 0 0;
  margin-left: 0;
  float: left;
}


#components-layout-demo-fixed .menue {

  margin:  8px 16px 16px 0;
  line-height: '48px';
  float: left;
  font-size: bold 16px ;
}


#components-layout-demo-fixed .search {

  margin: 16px 24px 16px 0;
  width: 300px;
  float: left;
  background: red;
}

</style>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
    },
  },
}
</script>