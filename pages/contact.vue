<template>
  <div class="js-site-main site-main">
    <section class="page-title-banner contact-banner">
      <div class="container text-center">
        <h1>Contact us</h1>
      </div>
    </section>
    <div class="contact-container-wrap py-0 py-md-5 mb-2">
      <div class="container contact-container">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="col-12" v-exchangeHtml:foo='contact.ContactUs'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  directives: {
    exchangeHtml: {
      // 指令的定义
      bind: function (el, foo) {
        el.innerHTML += foo.value
      }
    }
  },
  async asyncData (context) {
    const { data } = await context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/contactUS`)
    return { contact: data.data }
  },
  data () {
    return {
      contact: {}
    }
  },
  head () {
    return {
      title: this.contact.sitePageInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.contact.sitePageInfo.description },
        { hid: 'keywords', name: 'keywords', content: this.contact.sitePageInfo.keyWords }
      ]
    }
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<style>
</style>
