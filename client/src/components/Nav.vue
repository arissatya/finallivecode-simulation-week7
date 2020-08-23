<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">INVENTORY</a>
  <div class="">
    <ul class="">
      <li class="nav-item">
        <a @click.prevent="logout" class="nav-link" href="#">LOGOUT</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    logout () {
      this.$router.push('/')
      localStorage.clear()
    }
  }
}
</script>

<style>

</style>
