<template>
  <div>
    <g-header />
    <main>
      <nuxt />
    </main>
    <g-footer />
  </div>
</template>

<script>
import GHeader from '~/components/header'
import GFooter from '~/components/footer'
export default {
  components: {
    GHeader,
    GFooter
  }
}
</script>

<style>
</style>
