<template>
  <div id="app">
    <header1 :is-logged-in="user.isLoggedIn" v-if="currentHeader === 1"/>
    <header2 :is-logged-in="user.isLoggedIn" v-if="currentHeader === 2"/>
    <header3 :is-logged-in="user.isLoggedIn" v-if="currentHeader === 3"/>
    <router-view
      :user="user"
      :updateUser="updateUser"
    />
    <header-select
      :is-visible="headerSelectVisible"
      :select-header="selectHeader"
      :currentHeader="currentHeader"
    />
    <footer-default/>
  </div>
</template>

<script>
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import HeaderSelect from '@/components/HeaderSelect'
import FooterDefault from '@/components/FooterDefault'
import tracker from './tracker'

export default {
  name: 'App',
  components: {
    Header1,
    Header2,
    Header3,
    HeaderSelect,
    FooterDefault
  },
  data: () => ({
    currentHeader: parseInt(localStorage.getItem('currentHeader')) || Math.floor(Math.random()*3)+1,
    headerSelectVisible: false,
    user: {
      isLoggedIn: false,
      username: '',
      password: ''
    }
  }),
  methods: {
    selectHeader(headerId) {
      if (headerId > 0) {
        this.currentHeader = headerId;
        localStorage.setItem('currentHeader', this.currentHeader);
      }
    },
    hideSelectHeader() {
      this.headerSelectVisible = false;
    },
    showSelectHeader() {
      this.headerSelectVisible = true;
    },
    updateUser({username, password, isLoggedIn}) {
      this.user.username = username
      this.user.password = password
      this.user.isLoggedIn = isLoggedIn
    }
  },
  mounted() {
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      const ctrlKey = event.ctrlKey;
      if (key === 'o' && ctrlKey) {
        this.showSelectHeader();
      } else if(key === 'h' && ctrlKey) {
        this.hideSelectHeader();
      }
    });

    localStorage.setItem('currentHeader', this.currentHeader)

    tracker.start(this.$route.name)

    document.addEventListener('click', (event) => {
      tracker.trackClick(this.$route.name, event.target)
    }, true)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
body {
  padding: 0;
  margin: 0;
}
  /*
  #C0B283
  #DCD0C0
  #F4F4F4
  #373737
  */
</style>
