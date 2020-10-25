<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        assignment
      </h1>

      <div class="links">
        <nuxt-link to="/myfolder/mysubpage" class="button--green">2. my page</nuxt-link>
        <nuxt-link to="/count" class="button--green">3. Counter</nuxt-link>
        <nuxt-link to="/message/add" class="button--green">4. Messsages</nuxt-link>
        <nuxt-link to="/form" class="button--green">5. Form (incompleet)</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
