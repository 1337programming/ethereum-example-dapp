<template>
  <div class="container">
    <div class="row card first" v-bind:style="styleObject">
      <div class="title col-sm-12">
        <i class="fa fa-university"></i>
      </div>
      <div class="status verified col-sm-12">
        verified - <span class="badge badge-danger">${{state}}</span>
      </div>
      <div class="row content col-sm-12">
        <div class="info unknownBank col-sm-12">
          <p class="title">Institution</p>
          Navy Federal Credit Union

        </div>
        <div class="info knownBank col-sm-12">
          <div class="logo"></div>
        </div>
        <!--<bank-profile-account-info [accountNum]="12123124124" [routingNum]="12135352212" (onSubmit)="changeState($event)"></bank-profile-account-info>-->
        <div id="bank-card-payment">
          <bank-card-payment></bank-card-payment>
        </div>
      </div>
      <div class="footer col-sm-12">
        <div class="action" v-bind:class="{reveal: !isRevealed}" v-show="!payAnim">
          <a v-on:click="togglePay(true)">Pay</a>
        </div>
        <div class="confirm"  v-bind:class="{reveal: isRevealed}" v-show="payAnim">
          <span class="message">Pay bill $100?</span>
          <a v-on:click="pay()">Yes</a>
          <a v-on:click="togglePay(false)">No</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import BankCardPayment from '../BankCardPayment/bank-card-payment.vue';
  export default {
    name: 'bank-card',
    components: {
      BankCardPayment
    },
    events: {

    },
    props: {
      state: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#546e7a'
      },
      paying: {
        type: Boolean,
        default: false
      },
      payAnim: {
        type: Boolean,
        default: false
      },
      money: {
        type: Number,
        default: 1000
      }
    },
    data: {
      isRevealed: this.paying,
      styleObject: {
        'background-color': this.color
      }
    },
    mounted() {
    },
    methods: {
      pay: function () {

      },
      togglePay: function (val) {
        this.paying = val;
        setTimeout(() => {
          this.payAnim = val;
        }, 300);
      }
    }
  }
</script>

<style lang="css">
  @import "./bank-card.css";
</style>
