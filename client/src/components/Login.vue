<template>
  <div class="container col-lg-4 mt-5 border rounded shadow">
    <div class="row mt-2 mb-5">
        <div class="col">
          <form @submit.prevent="login" >
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="email" class="sr-only">Email address</label>
              <input type="email" v-model="email" class="form-control" placeholder="Email address" required>
            <label for="password" class="sr-only">Password</label>
              <input type="password" v-model="password" class="form-control" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
