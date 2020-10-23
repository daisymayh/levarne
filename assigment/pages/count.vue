<template>
  <div class="container">
    <Counter/>

    <div class="links">
        <nuxt-link to="/" class="button--green">homepage</nuxt-link>
        <nuxt-link to="/myfolder/mysubpage" class="button--green">2. my page</nuxt-link>
        <div class="button--green is-active">3. Counter</div>
    </div>
  </div>
</template>


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
