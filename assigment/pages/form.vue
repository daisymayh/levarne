<template lang="pug">
  <div class="wrapper">
    form(class="form")
      h2 Pug
      input(class="input" type="text" v-model="formData" placeholder="Name")
      input(class="input" type="text" v-model="formData" placeholder="Place")
      input(class="input" type="text" v-model="formData" placeholder="Email")
      button(class="button--submit" @click="setEchoResponse") Submit


    //- <form class="form" @submit.prevent="submitForm">
    //-   <h2>Form</h2>
    //-   <input class="input" type="text" v-model="formData.name" placeholder="Name"/>
    //-   <input class="input" type="text" v-model="formData.place" placeholder="Place"/>
    //-   <input class="input" type="text" v-model="formData.email" placeholder="Email"/>
    //-   <button class="button--submit" type="submit" @click="setEchoResponse">Submmit</button>
    //- </form>

    <div class="links">
      <nuxt-link to="/" class="button--green">homepage</nuxt-link>
      <div class="button--green is-active">2. my page</div>
      <nuxt-link to="/count" class="button--green">3. Counter</nuxt-link>
      <nuxt-link to="/message/add" class="button--green">4. Messages</nuxt-link>
      <nuxt-link to="/form" class="button--green">5. Form (incompleet)</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: []
      };
    },
    methods: {
      setEchoResponse() {
        this.$store.dispatch("echo", formData);
      }
    },
  }
</script>

<style lang="scss">
 .wrapper {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

  .links {
    width: 100%;
    padding-top: 15px;
  }

  .form {
    width: 40%;

    .input {
      width: 100%;
      height: 35px;
      padding: 5px 10px;
      margin-bottom: 15px;
      transition: all 0.3s ease-in-out;

      &:hover, &:focus {
        border-color: darken(#35495e, 10%);
        background-color: lighten(#35495e, 40%);
        color: #fff;

        &::placeholder {
          color: #fff;
        }
      }
    }

    .button--submit {
      width: 100%;
      cursor: pointer;
      display: inline-block;
      border-radius: 4px;
      background-color: #35495e;
      border: 1px solid #35495e;
      color: #fff;
      text-decoration: none;
      padding: 10px 30px;
      margin-left: 15px;
      transition: all 0.3s ease-in-out;

      &:hover, &:focus {
        background-color: lighten(#35495e, 15%);
        border: 1px solid #35495e;
        color: #fff;
      }
    }
  }
</style>
