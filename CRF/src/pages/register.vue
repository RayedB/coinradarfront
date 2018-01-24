<template>
<div class="register">
    <h1>Login</h1>
    <form :model="form">
      <input type="text" placeholder="email" name="email" v.model="form.email"/>
      <input type="password" placeholder="password" name="password" v-model="form.password" />
      <input type="submit" value="Login" @click="onSubmit"/>
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
        //let company = {name: this.form.name, user: this.form.email}
        this.registerCompany(company)
        .then(() => this.registerUser({email: this.form.email, password: this.form.password, passwordConfirmation: this.form.passwordConfirmation}))
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
