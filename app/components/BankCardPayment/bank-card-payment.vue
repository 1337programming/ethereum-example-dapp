<template>
  <div>
    <div class="info col-xs-6">
      <p class="title">Routing Number</p>
      <p class="text-sm-center">{{routingNum}}</p>
    </div>
    <div class="info col-xs-6">
      <p class="title">Account Number</p>
      <p class="text-sm-center">{{accountNum}}</p>
    </div>

    <p>Change Local State:</p>
    <input class="form-control"
           ref="input"
           v-bind:value="value"
           v-on:blur="formatValue()"
           v-on:input="updateValue($event.target.value)">
    <button class="btn btn-info" v-on:click="submit()">Submit</button>
  </div>
</template>

<script>

  import { CurrencyValidator } from './models/currency-validator';

  export default {
    name: 'bank-card-payment',
    props: {
      value: {
        type: Number,
        default: 0
      },
      routingNum: {
        type: String,
        default: ''
      },
      accountNum: {
        type: String,
        default: ''
      }
    },
    methods: {
      formatValue: function () {
        this.$refs.input.value = CurrencyValidator.format(this.value);
      },
      updateValue: function () {
        let result = CurrencyValidator.parse(value, this.value);
        if (result.warning) {
          this.$refs.input.value = result.value
        }
        this.$emit('input', result.value)
      },
      submit: function () {
        console.log(this.value);
      }
    }
  }
</script>

