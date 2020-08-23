<template>
  <div class="container">
    <Nav/>
    <div class="row mt-5">
      <div class="col">
        <ItemCard
        v-for="item in items"
        :key="item.id"
        :item='item'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import ItemCard from '../components/ItemCard'

export default {
  name: 'Inventories',
  components: {
    Nav,
    ItemCard
  },
  created () {
    this.$store.dispatch('fetch')
  },
  computed: {
    items () {
      return this.$store.getters.inventory
    }
  }
}
</script>

<style>

</style>
