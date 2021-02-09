<template>
  <div id="donationsList" class="page columns is-multiline">
    <div class="column is-one-third-desktop is-half-tablet is-full-mobile" v-for="(nonprofit, index) in nonProfits" :key="index">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ nonprofit.name }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {{ nonprofit.description }}
          </div>
          <div class="content">
            {{ nonprofit.address }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NonProfitList",
  created() {
    this.$store.dispatch('getNonProfits');
  },
  computed: {
    nonProfits() {
      return this.$store.state.nonProfits || []
    }
  }
}
</script>

<style scoped>

</style>
