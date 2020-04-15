<template>
  <div class="js-site-main site-main">
    <section class="page-title-banner category-banner">
      <div class="container">
        <h1 class="text-center">TOP COUPONS</h1>
      </div>
    </section>

    <!-- Top Coupons -->
    <div class="container-wrap py-2">
      <section class="container top-coupon-section search-coupon-container">
        <div class="row">
          <div class="coupon-item-wrap col-12 col-sm-6 col-md-4 col-lg-3 px-2 py-0 py-md-2" v-for="(item, index) in topCouponList" :key="index">
            <div class="coupon-item row no-gutters">
              <div class="pic-box col-3 col-sm-12 d-flex flex-grow-0 justify-content-center">
                <nuxt-link
                  class="cover-wrap position-relative"
                  :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?storeId=${item.storeId}`"
                >
                  <div class="cover">
                    <img
                      :src="`https://cannabispromocodes.com${item.storeLogeUrl}`"
                      alt="15% Off with Entire Order Site-wide @2Rise Naturals"
                    />
                  </div>

                  <span class="coupon-label coupon-label--code" v-if="item.couponType === 'CODE'">{{ item.couponType }}</span>
                  <span class="coupon-label coupon-label--deal" v-if="item.couponType === 'DEAL'">{{ item.couponType }}</span>
                </nuxt-link>
              </div>

              <div class="info-box col-9 col-sm-12 d-flex flex-wrap align-content-between">
                <a
                  rel="nofollow"
                  :url="item.storeWebSite"
                  class="get_deal coupon-title text-left text-sm-center"
                  :href="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}??storeId=${item.storeId}&c=${item.outSiteCouponId}`"
                >
                  <p>{{ item.name }}</p>
                </a>

                <div class="extra-info">
                  <span class="d-none use-info">
                    <i class="fa fa-user mr-1" aria-hidden="true"></i>0 USED
                  </span>
                  <span class="d-none d-sm-block">
                    <span class="rate">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="success">SUCCESS</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- End Top Coupons -->
  </div>
</template>

<script>
export default {
  name: 'topCoupons',
  async asyncData (context) {
    const { data } = await context.$axios.post(
      `http://47.241.6.230:8080/coupons-management/green/topCouponlist`
    );
    console.log(data)
    return { topCouponList: data.data };
  },
  data () {
    return {
      topCouponList: []
    };
  },
  head () {
    return {
      title: '绿站'
    }
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<style>
</style>
