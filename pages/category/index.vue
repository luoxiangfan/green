<template>
  <div class="js-site-main site-main">
    <section class="page-title-banner category-banner d-none d-md-block">
      <div class="container text-center">
        <h1 class>
          Categories in
          <nuxt-link to="/">Cannabispromocodes.com</nuxt-link>
        </h1>
      </div>
    </section>
    <section class="container-wrap category-container-wrap mb-2 mb-lg-0">
      <div class="container category-container">
        <p class="container-title d-block d-sm-none">Category</p>
        <div class="row">
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 p-3 p-sm-2" v-for="item in topCategoryList.storeTypeList" :key="item.id">
            <div class="category-item">
              <nuxt-link :to="`/category/${item.name.replace(' ', '')}`">{{ item.name }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'category',
  // async asyncData (context) {
  //   const { data } = await context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/storeTypeList`)
  //   return { resData: data.data }
  // },
  data () {
    return {
      resData: {},
      baseUrl: 'http://47.241.6.230:8080/coupons-management/'
    }
  },
  computed: {
    ...mapState({
      topCategoryList: state => state.category.topCategoryList
    })
  },
  mounted () {
    // console.log(this)
  },
  head () {
    return {
      title: this.topCategoryList.sitePageInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.topCategoryList.sitePageInfo.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.topCategoryList.sitePageInfo.keyWords
        }
      ]
    };
  }
}
</script>

<style>
</style>
