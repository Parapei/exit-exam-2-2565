<template>
  <v-container fluid class="bg-blue-lighten-3 pa-5 " width="100%" height="100%">
    <h1>ChatCSIfElse</h1>
    <v-btn to="/">Logout</v-btn>
  </v-container>
  <v-card v-for="(log, n) in msglog" :key="n" class="ma-5 pa-5 bg-blue-lighten-5">
    <h2>name : {{ log.name }}</h2>
    <b>message : </b> {{ log.msg }} <br />
    <b>Timestamp : </b> {{ log.Timestamp }} <br>
  </v-card>
  <v-row>
    <v-text-field v-model="msg" label="Type your message" class="pa-5"></v-text-field>
    <v-btn class="bg-blue pr-5 ma-8" @click="send()" append-icon="mdi-arrow-right"> <v-icon></v-icon>send </v-btn>
  </v-row>
</template>


<script>
import { store } from "../stores/store";
import uniqid from 'uniqid';

// Components
export default ({
  name: 'HomeView',

  data: () => ({
    modelStore: store(),
    arr: [],
    msglog: [],
    msg: '',
    name: ''
  }),

  methods: {
    async QueryData() {
      this.modelStore.getQuery();
      this.msglog = this.modelStore.getlog;
      this.name = this.modelStore.getname;
    },
    //when push this button sent data to model store 
    send() {
      const data = {
        id: uniqid(),
        name: this.name,
        msg: this.msg,
        Timestamp: new Date().toLocaleString(),
      }
      this.msg = '';
      console.log(data);
      this.msglog.push(data);
      this.modelStore.botengine('chat', data)
      this.QueryData()
    },
  },
  //Constructure method
  async mounted() {
    this.modelStore.botengine('greeting')
    this.QueryData();

  },

})
</script>