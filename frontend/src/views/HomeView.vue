<template>
  <v-sheet fluid style="height:100%;" class="bg-deep-purple pa-15" rounded>
    <v-card class="mx-auto px-10 py-15" max-width="900">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
      <h1 class="pa-8 text-center">ChatCS If Else</h1>
      <h2 class="pa-2 text-center">Who are you?</h2>
        <v-text-field
          v-model="name"
          class="mb-2"
          clearable
          label="Type your name"
        ></v-text-field>
        <br>

        <v-btn
          @click="send()"
          block rounded="xl"
          color="primary"
          size="large"
        >
          Let's talk
        </v-btn>
        
      </v-form>
    </v-card>
  </v-sheet>
</template>



<script>
import { store } from "../stores/store";
import { useRouter } from 'vue-router'


// Components
export default({
  name: 'HomeView',

  data: () => ({
    modelStore: store(),
    router: useRouter(),
    name:''
  }),
  methods: {
    send() {
        this.modelStore.setName(this.name)
        console.log(this.name);
        this.msg = '';
        this.router.push('/chat')
        console.log(this.modelStore.getname);
    }
  }
})
</script>
