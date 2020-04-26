<template>
  <div class="js-site-main site-main" style="min-height: 478px;">
    <section class="page-title-banner about-banner">
      <div class="container text-center">
        <h1>About us</h1>
      </div>
    </section>
    <div class="about-container-wrap py-0 py-md-5 mb-2">
      <div class="container about-container">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="col-12" v-exchangeHtml:foo='about.AboutUs'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  directives: {
    exchangeHtml: {
      // 指令的定义
      bind: function (el, foo) {
        el.innerHTML += foo.value
      }
    }
  },
  async asyncData (context) {
    const { data } = await context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/aboutUs`)
    return { about: data.data }
  },
  data () {
    return {
      about: {}
    }
  },
  head () {
    return {
      title: this.about.sitePageInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.about.sitePageInfo.description },
        { hid: 'keywords', name: 'keywords', content: this.about.sitePageInfo.keyWords }
      ]
    }
  }
}
</script>

<style>
</style>
