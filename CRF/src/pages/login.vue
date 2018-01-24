<template>
<div class="login">
    <h1>Login</h1>
    <form :model="form">
      <input type="text" placeholder="email" name="email" v-model="form.email"/>
      <input type="password" placeholder="password" name="password" v-model="form.password"/>
      <input type="submit" value="Login" @click.prevent="onSubmit"/>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.loginUser(this.form)
      .then(() => this.$router.push('/'))
      .catch(err => console.log(err)) // TODO afficher err
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
