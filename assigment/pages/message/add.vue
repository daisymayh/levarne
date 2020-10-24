<template>
  <div class="container">
    <input ref="message" type="text" class="input" placeholder="Add your message here"  v-on:keyup.enter="addMessage" />
    <button v-on:click="addMessage" class="button--green">Add message</button>

  	<div class="links">
      <nuxt-link to="/message/read" class="button--grey">Read messages</nuxt-link>
    </div>

    <div class="links">
      <nuxt-link to="/" class="button--green">Homepage</nuxt-link>
      <nuxt-link to="/myfolder/mysubpage" class="button--green">2. my page</nuxt-link>
      <nuxt-link to="/count" class="button--green">3. Counter</nuxt-link>
      <div to="/message/add" class="button--green is-active">4. Messsages</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      messages() {
        return this.$store.state.messages
      }
    },
    methods: {
      addMessage(e) {
        this.$store.commit('addMessage', this.$refs.message.value);
        this.$refs.message.value = "";
      }
    }
  }
</script>


<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .links {
    width: 100%;
    padding-top: 15px;
  }
</style>
