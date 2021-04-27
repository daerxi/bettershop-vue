<template>
  <form-component title="Login">
    <input
        type="email"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
        v-model="email"/>

    <input
        type="password"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        placeholder="Password"
        v-model="password"/>

    <p class="error text-red-800 mb-4" v-if="error">{{ error }}</p>

    <button
        type="submit" v-on:click="login"
        class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >Login
    </button>
    <div class="text-right text-sm text-gray-800 mt-4">
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../forgotPassword">
        Forgot Password?
      </a>
    </div>

    <div class="text-gray-800 mt-6">
      Doesn't have an account?
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../signup">
        Sign up today!
      </a>.
    </div>
  </form-component>
</template>

<script>
import UsersService from '../APIs/UsersService'
import FormComponent from "@/components/Form";

export default {
  name: 'LoginUser',
  components: {FormComponent},
  data() {
    return {
      users: [],
      userToken: {
        id: Number,
        userId: Number,
        token: String
      },
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      if (this.email.trim() === '' || this.password.trim() === '')
        this.error = "Please enter the required fields."
      else {
        this.userToken = await UsersService.loginUser(this.email, this.password).then( (res, err) => {
          this.userToken= res.data;
          console.log("res",res);
          console.log('err',err)
          localStorage.setItem('user-token', this.userToken.token)
          localStorage.setItem('user-id', this.userToken.userId)
        }).catch(e => {
          if (e.response.status === 404) {
            this.error = "This account does not exist.";
          } else {
            this.error = "This combination is not correct.";
          }
          console.log(e);
        });
      }
    }
  }
}
</script>