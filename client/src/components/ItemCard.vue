<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p class="card-text">price: {{item.price}}</p>
      <p class="card-text">quantity: {{item.quantity}}</p>
      <p class="card-text">status: {{item.status}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['item']
}
</script>

<style>

</style>
