<template>
  <div id="donationsList" class="columns is-multiline">
    <div class="column is-one-quarter" v-for="(donation, index) in donations" :key="index">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ donation.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {{ donation.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationsList",
  created() {
    this.$store.dispatch('getDonations');
  },
  computed: {
    donations() {
      return this.$store.state.donations || []
    }
  }
}
</script>

<style scoped>
#donationsList {
  padding: 20px;
  background-color: #2B677E;
}
</style>
