<template>
  <div class="container">
    <ul>
        <li v-for="message in messages" v-bind:key="message.newMessage">
            {{ message.newMessage }}
        </li>
    </ul>

    <div class="links">
      <nuxt-link to="/message/add" class="button--green">add messages</nuxt-link>
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
    computed: {
      messages() {
        return this.$store.state.messages
      }
    },
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
