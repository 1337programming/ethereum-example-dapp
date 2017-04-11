<template>
  <section id="home">
    <h1>Home</h1>
    <h2>{{ message }}</h2>
  </section>
</template>

<script>
  import BankCard from './BankCard/bank-card.vue';
  export default {
    name: 'home',

    store: ['message'],

    components: {
      BankCard
    },

    events: {
      test(message) {
        this.message = message
      }
    },

    mounted() {
      setTimeout(() => this.$events.fire('test', "You've received a message from home.vue"), 1500);
      setTimeout(() => this.$events.fire('test', "Now you've received another message home.vue"), 3000);
    }
  }
</script>
