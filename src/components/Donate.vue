<template>
  <div>
    <form-component :alert-open="alertOpen" :type="type" :message="message" title="Donate">
      <input-component type="text" name="Name" v-model.trim="customer.name"/>
      <input-component type="text" name="Country" v-model.trim="customer.address_country"/>
      <input-component type="text" name="Province" v-model.trim="customer.address_state"/>
      <input-component type="text" name="City" v-model.trim="customer.address_city"/>
      <input-component type="text" name="Address Line 1" v-model.trim="customer.address_line1"/>
      <input-component type="text" name="Address Line 2" v-model.trim="customer.address_line2"/>
      <input-component type="text" name="Postal Code" v-model.trim="customer.address_zip"/>
      <div class="flex grid grid-cols-12 gap-2">
        <input-component v-bind:class="{'col-span-6': $isMobile(),
                                        'col-span-8': !$isMobile()}"
                         type="number" name="Amount of Donation" v-model.trim="amount"/>
        <dropdown-component v-bind:class="{'col-span-6': $isMobile(),
                                           'col-span-4': !$isMobile()}"
                            v-model="currency"
                            placeholder="Currency" :options="options"/>
      </div>

      <div id="card-element" ref="card" class="block border border-gray-300 w-full p-4 rounded mb-4 px-2"></div>
      <submit-button :fn="submitPayment" title="Submit"></submit-button>
    </form-component>
  </div>
</template>

<script>
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import SubmitButton from "@/components/SubmitButton";
import { openAlert } from "@/utils/helper";
import DropdownComponent from "@/components/Dropdown";

// eslint-disable-next-line no-undef
const stripe = Stripe('pk_test_51Ib6HRJ3hdZYvgvCNQAw3aqAPjEiSYmnXdNqim3x67ZPfHKIatQGrLFU0XmXKufciiLgmOCPe3e4171jK3ibVTDI00LNCtmpPQ');
const elements = stripe.elements();
let card = undefined;

export default {
  name: "DonateComponent",
  components: {DropdownComponent, SubmitButton, InputComponent, FormComponent},
  data() {
    return {
      type: '',
      message: '',
      alertOpen: false,
      customer: {},
      amount: 0,
      showLabel: true,
      currency: '',
      options: [
        {
          type: 'USD'
        },
        {
          type: 'CAD'
        },
        {
          type: 'AUD'
        },
        {
          type: 'CNY'
        },
        {
          type: 'HKD'
        },
        {
          type: 'JPY'
        }
      ]
    }
  },
  async mounted() {
    card = elements.create('card')
    card.mount(this.$refs.card, {
      hidePostalCode: true
    })
  },
  methods: {
    async submitPayment() {
      stripe.createToken(card, this.customer).then(res => {
        if (res.error) openAlert(this, "error", "res.error.message")
        else {
          openAlert(this, "success", "Thank your for your support. Your payment has been processed.")
          console.log(res.token)
        }
      });
    }
  }
}
</script>

<style scoped>

</style>