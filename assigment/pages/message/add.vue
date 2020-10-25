<template>
  <div class="container">
    <input ref="message" type="text" class="input" placeholder="Add your message here" v-on:keyup.enter="addMessage" />
    <button v-on:click="addMessage" class="button--green">Add message</button>

  	<div class="links">
      <nuxt-link to="/message/read" class="button--grey">Read messages</nuxt-link>
    </div>

    <div class="links">
      <nuxt-link to="/" class="button--green">Homepage</nuxt-link>
      <nuxt-link to="/myfolder/mysubpage" class="button--green">2. my page</nuxt-link>
      <nuxt-link to="/count" class="button--green">3. Counter</nuxt-link>
      <div to="/message/add" class="button--green is-active">4. Messsages</div>
      <nuxt-link to="/form" class="button--green">5. Form (incompleet)</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      addMessage(e) {
        if (this.$refs.message.value.length !== 0) {
          this.$store.commit('addMessage', this.$refs.message.value);
          this.$refs.message.value = "";
        } else {
          alert('DOH! Message is empty!');
        }
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
