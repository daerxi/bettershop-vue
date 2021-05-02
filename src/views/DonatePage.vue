<template>
  <div>
    <profile-component></profile-component>
    <donate-component></donate-component>
  </div>
</template>

<script>
import DonateComponent from "@/components/Donate";
import ProfileComponent from "@/components/Profile";
export default {
  name: "DonatePage",
  components: {ProfileComponent, DonateComponent}
}
</script>

<style scoped>

</style>