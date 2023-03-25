<template>
  <v-container fluid class="bg-blue-lighten-3 pa-5 " width="100%" height="100%">
    <h1>ChatCSIfElse</h1>
  </v-container>
  <v-card class="ma-5 pa-5 bg-blue-lighten-5">
    <v-avatar color="surface-variant"></v-avatar> BOT
    <!-- <v-avatar image="smirk.png"></v-avatar> สำหรับใส่รูป -->
       
          <h4 class="pa-5">" Enter yourname pls.." </h4>
          <h5> Mon,09:45 </h5>
        </v-card>

  <v-card class="ma-5 pa-5 bg-white" >
    <v-avatar color="purple-lighten-4"></v-avatar> YOU
    <!-- <v-avatar image="smirk.png"></v-avatar> สำหรับใส่รูป -->
       
          <h4 class="pa-5">Bob</h4>
          <h5> Mon,09:46 </h5>
        </v-card>
  

    <v-row >
      <v-text-field  v-model="fname" label="Type your message" class="pa-5"></v-text-field>
      <v-btn class="bg-blue pr-5 ma-8" append-icon="mdi-arrow-right"> <v-icon
        ></v-icon>send </v-btn>
    </v-row>
   
    


</template>

<script>

// Components
export default({
  name: 'HomeView',

  components: {
  
  },
});
</script>
