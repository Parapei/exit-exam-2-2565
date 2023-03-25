import { defineStore } from "pinia";
import axios from "axios";
import uniqid from 'uniqid';

// ! ----- CONST VARIABLES ----- ! //
const apiUrl = "http://localhost:3000";
const subApi = "/msglog";

// ! ----- MODEL ----- ! //
export const store = defineStore({
  id: "feedback",
  // Declare variables
  state: () => ({
    db:[],
    msglog : [],
    dbName:[],
    name : '',
    oldUser : false,
  }),

  // Declare Getter method
  getters: {
    getlog() {
      return this.msglog;
    },
    getname(){
      return this.name
    }
  },

  // Declare actions method 
  actions: {
    async recmsg(msg){
      console.log(typeof this.msglog);
    },

    //set and check if he is old users
    async setName(name){
      try {
        for (let i in db) {
          console.log(i);
          if(i.name == name)
            this.oldUser = 'True';
            else this.oldUser = 'False';
        }
      } catch (error) {
        console.log("end");
      }
      const arr = this.db
      console.log(typeof arr);
      this.name = name
    },
    //If else chatbot
    async botengine(intent,recdata){
      //declare day and time
      const now = new Date();
      const curday = now.getDay();
      const curhour = now.getHours();
      if (curday === 0 || curday === 6 || curhour >= 17 || curhour < 8) {
        const data = {
          id:uniqid(),
          name: 'bot',
          msg: "Sorry,We are out of service in this moment!!",
          Timestamp: new Date().toLocaleString(),
        }
        this.msglog.push(data);
        this.addMsg(data);
        console.log("Out of Service");
        return
      }
      //If intent is greeting 
      if(intent=='greeting'){
        if(this.oldUser != 'True'){
          const data = {
            id:uniqid(),
            name: 'bot',
            msg: "Welcome \"" +this.name +"\" to ChatCSIfElse, the best chat AI in the world! What can I help you",
            Timestamp: new Date().toLocaleString(),
          }
          this.msglog.push(data);
          this.addMsg(data);
        }
        else{
          const data = {
            id:uniqid(),
            name: 'bot',
            msg: "Welcome again "+this.name +" Anything else today?",
            Timestamp: new Date().toLocaleString(),
          }
          this.msglog.push(data)
          this.addMsg(data);

          }
      }
      if(intent=='chat'){
        const data = {
          id:uniqid(),
          name: 'bot',
          msg: "“That is interesting "+this.name+", that you said "+recdata.msg +". I will send this message to someone else very soon. Anything else I can help?”",
          Timestamp: new Date().toLocaleString(),
        }
        this.msglog.push(data)
        this.addMsg(data);
      }
    },

    //get data from database and set it as variable
    async getQuery() {
      try {
        const res = await axios.get(apiUrl + subApi);
        this.db = res.data;
        console.log(
          "API: [",
          apiUrl + subApi,
          "]: \n",
          this.log
        );
        console.log(this.db[0]);
      } catch (e) {
        console.error(e);
      }
    },

    //add data to database
    async addMsg(payload) {
      try {
        const res = await axios.post(apiUrl + subApi, payload);
      } catch (e) {
        console.error(e);
      }
    },
      
  },
});
