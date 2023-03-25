import { defineStore } from "pinia";
import axios from "axios";

// ! ----- CONST VARIABLES ----- ! //
const apiUrl = "http://localhost:3000";
const subApi = "/log";

// ! ----- MODEL ----- ! //
export const store_feedback = defineStore({
  id: "feedback",
  // Declare variables
  state: () => ({
    log : [],
    name : '',
    oldUser : false,


  }),

  // Declare Getter method
  getters: {
    getlog() {
      return this.log;
    },
  },

  // Declare actions method 
  actions: {
    async checkName(name){
      for (const i in this.log) {
        if(i.name == name){
          this.oldUser = True;
        }
      }
    },
    
    //get data from database and set it as variable
    async getQuery() {
      try {
        const res = await axios.get(apiUrl + subApi);
        this.log = res.data;
        console.log(
          "API: [",
          apiUrl + subApi,
          "]: \n",
          this.log
        );
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
