<template>
  <div>
    <h1>counter: {{ count }}</h1>
    <button v-on:click="increment" class="button--green">Increase</button>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count++
      },
    },
  };
</script>
