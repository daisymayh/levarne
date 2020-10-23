<template>
  <div class="container">
    <h1 class="title">Opdracht 2</h1>
    <p>Hallo Levarne</p>

    <div class="links">
      <nuxt-link to="/" class="button--green">homepage</nuxt-link>
      <nuxt-link to="/myfolder/mysubpage" class="button--green is-active">2. my page</nuxt-link>
      <nuxt-link to="/count" class="button--green">3. Counter</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
 data: function() {
  return {
      message: "dit is een message"
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

  .title {
    width: 100%;
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  p {
    width: 100%;
    font-size: 14pt;
    color: #222222;
  }
</style>
