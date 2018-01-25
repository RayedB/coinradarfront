<template>
<div class="register">
    <h1>Register</h1>
    <form :model="form">
      <input type="text" placeholder="email" name="email" v-model="form.email"/>
      <input type="password" placeholder="password" name="password" v-model="form.password" />
      <input type="password" placeholder="confirmation" name="confirmation" v-model="form.passwordConfirmation" />
      <input type="submit" value="Register" @click.prevent="onSubmit"/>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      invalid: true
    }
  },
  watch: {
    passwordConfirmation: function(oldPassword, newPassword) {
      this.confirmPassword()
    }
  },
  methods: {
    ...mapActions(['registerUser', 'registerCompany', 'loginUser']),
    confirmPassword() {
      if (this.password === this.passwordConfirmation) {
        this.invalid = false
        console.log(this.invalid)
      }
    },
    onSubmit() {
      if (this.password === this.passwordConfirmation) {
        this.registerUser({ email: this.form.email, password: this.form.password })
        .then(() => this.loginUser({email: this.form.email, password: this.form.password}))
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err)) // TODO afficher err
      }
    }
  }
}
</script>
<style scoped>
  .login {
    width: 30%;
    margin:auto;
  }
</style>
