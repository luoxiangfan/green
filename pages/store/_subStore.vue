<template>
  <div class="js-site-main site-main">
    <modal v-if="dialogVisible" :dialogVisible="dialogVisible" :currCouponItem="currCouponItem" @close="dialogVisible = false" @open="dialogVisible = true" />
    <section class="page-title-banner">
      <div class="container store-info-container">
        <div class="row">
          <!-- Profle Content -->
          <div class="col-lg-2 col-md-3 col-5 d-flex align-items-center">
            <!-- Store Image -->
            <div class="store-brand cover-wrap">
              <a class="cover" :href="(storeDetailData.Advertising !== null && storeDetailData.Advertising !== '') ? storeDetailData.Advertising : storeDetailData.webSiteUrl" target="_blank" rel="nofollow">
                <img
                  class="img-fluid img-size-all"
                  :src="`https://cannabispromocodes.com${storeDetailData.logo}`"
                  :alt="`${storeDetailData.name} coupons`"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-md-9 col-7 d-flex d-lg-block align-items-center">
            <h1 class="store-name">{{ storeDetailData.showName }}</h1>
            <p class="store-description d-none d-lg-block">{{ storeDetailData.storeDescription }}</p>

            <div class="d-none d-lg-block">
              <span class="store-info-item">
                <em>{{ storeDetailData.couponTotal }}</em> Offers Available
              </span>
              <!-- <span class="store-info-item">
                      <em>2</em> Verified Coupons
              </span>-->
              <span class="store-info-item">
                <em>{{ storeDetailData.codeTotal }}</em> Coupon Codes
              </span>
              <span class="store-info-item">
                <em>{{ storeDetailData.dealTotal }}</em> Sales
              </span>
              <span class="store-info-item">{{ storeDetailData.lastUpdateTime }}</span>
            </div>
            <!-- Project Progress -->
          </div>
          <div class="col-lg-2 d-none d-lg-flex align-items-end justify-content-end">
            <a class="visit-btn" :href="storeDetailData.Advertising" target="_blank" rel="nofollow">Visit Website</a>
          </div>
        </div>
      </div>
    </section>

    <div class="container-wrap store-detail-main-wrap">
      <div class="container">
        <div class="row">
          <!-- left side -->
          <div class="col-lg-3 col-12 pr-lg-0 d-none d-lg-block">
            <!-- Panel Header -->
            <div class="card top-store-card">
              <p
                style="font-size: 28px;color: #444;font-weight: normal;margin-bottom: 26px;"
              >Top Stores</p>

              <!-- Panel Body -->
              <div class="row">
                <div class="col-6 p-2" v-for="item in resData" :key="item.id">
                  <nuxt-link
                    class="cover-wrap store-item"
                    style="max-height: 100px"
                    :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                  >
                    <div class="cover">
                      <img
                        class="img-fluid img-size-all"
                        style="height: 100%;max-width: 100%;max-height: 100%;"
                        :alt="`${item.name} coupons`"
                        :src="`https://cannabispromocodes.com${item.logoUrl}`"
                      />
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <!-- End Panel Body -->
            </div>
            <div class="card text-left">
              <p>{{ storeDetailData.Synopsis }}</p>
            </div>
          </div>

          <div class="col-lg-9 col-12 coupon-container">
            <div class="row">
              <div class="col-12 choice">
                <button id="type_all" class="btn btn-sm btn-all" :class="{'btn-active': allActive}" @click="selectCoupon('')">
                  All
                  <span class="d-none d-md-inline">Offers</span>
                </button>
                <button id="type_code" class="btn btn-sm btn-code" :class="{'btn-active': codeActive}" @click="selectCoupon('CODE')">
                  <span class="d-none d-md-inline">Coupon</span>Codes
                </button>
                <button id="type_deal" class="btn btn-sm btn-deal" :class="{'btn-active': dealActive}" @click="selectCoupon('DEAL')">Deals</button>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <!-- User Block -->

                <div class="box d-flex my-2 my-sm-3" data-coupon-type="CODE" v-for="(couponItem, index) in couponList" :key="index">
                  <a
                    class="get_code"
                    :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite"
                    :url="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${couponItem.id}#get_code_${couponItem.id}`"
                    target="_self"
                    rel="nofollow"
                    @click="getDeal(couponItem)"
                  >
                    <div class="offer d-none d-sm-block">
                      <div
                        class="offer-anchor d-flex flex-column justify-content-center align-items-center"
                        style="max-height: 100px"
                      >
                        <span class="offer-anchor-text">
                          <span v-for="(saleItem, index) in couponItem.sale.replace(' ', '').split(' ')" :key="index">{{ saleItem }}<br v-if="index !== couponItem.sale.split(' ').length-1"></span>
                        </span>
                        <span class="label" :class="couponItem.couponType.toLowerCase()">{{ couponItem.couponType }}</span>
                      </div>
                    </div>
                  </a>
                  <div class="detail-info">
                    <a
                      class="get_code"
                      :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite"
                      :url="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${couponItem.id}#get_code_${couponItem.id}`"
                      target="_self"
                      rel="nofollow"
                      @click="getDeal(couponItem)"
                    >
                      <h3 class="paddl">
                        <span class="label d-inline d-sm-none" :class="couponItem.couponType.toLowerCase()">{{ couponItem.couponType }}</span>{{ couponItem.title }}
                      </h3>
                    </a>

                    <a
                      :url="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${couponItem.id}#get_code_${couponItem.id}`"
                      rel="nofollow"
                      class="get_code"
                      target="_self"
                      :href="(couponItem.link && (couponItem.link !== '')) ? couponItem.link : couponItem.storeWebSite"
                      v-if="couponItem.couponType === 'CODE'"
                      @click="getDeal(couponItem)"
                    >
                      <div class="coupon-hop">
                        <div class="partial-code">{{ (couponItem.code !== null && couponItem.code !== '') ? couponItem.code.substring(couponItem.code.length - 1) : '' }}</div>
                        <div class="hide-btn d-flex align-items-center justify-content-center">
                          <span>
                            Show Code
                            <br />
                            <small class="d-none d-sm-inline">&amp; visit site</small>
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      class="btn-get-deal get_deal"
                      :url="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${couponItem.id}#get_code_${couponItem.id}`"
                      rel="nofollow"
                      target="_self"
                      :href="couponItem.link && couponItem.link !== '' ? couponItem.link : couponItem.storeWebSite"
                      v-else
                      @click="getDeal(couponItem)"
                    >GET DEAL</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Profile Sidebar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '~/components/modal'
export default {
  name: "store-subStore",
  components: {
    modal
  },
  async asyncData (context) {
    const params = {
      storeWebSite: context.params.subStore
    }
    const couponParams = {
      storeWebSite: context.params.subStore,
      couponType: (context.query.coupon_type && context.query.coupon_type !== null) ? context.query.coupon_type : ''
    }
    const [res1, res2] = await Promise.all([
      context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/StoreDetail`, params).then(res => {
        return res
      }),
      context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/getStoreCouponList`, couponParams).then(res => {
        return res
      })
    ])
    const { data } = await context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/getTopStores`)
    return {
      storeDetailData: res1.data.data,
      couponList: res2.data.data,
      resData: data.data
    }
  },
  data () {
    return {
      dialogVisible: false,
      resData: {},
      storeDetailData: {},
      couponList: [],
      couponSelectList: {},
      allActive: false,
      dealActive: false,
      codeActive: false,
      currCouponItem: {}
    }
  },
  head () {
    return {
      title: this.storeDetailData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.storeDetailData.description },
        { hid: 'keywords', name: 'keywords', content: this.storeDetailData.keyWords }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: { '@context': 'http://schema.org', '@type': 'WebSite', name: this.storeDetailData.name, title: this.storeDetailData.title, keywords: this.storeDetailData.keyWords, description: this.storeDetailData.description, url: this.storeDetailData.webSiteUrl, logo: this.storeDetailData.logo }
        },
        {
          type: 'application/ld+json',
          json: { '@context': 'http://schema.org', '@type': 'Organization', name: this.storeDetailData.name, title: this.storeDetailData.title, keywords: this.storeDetailData.keyWords, description: this.storeDetailData.description, url: this.storeDetailData.webSiteUrl, logo: this.storeDetailData.logo }
        }
      ]
    }
  },
  created () {
    if (this.$route.query.coupon_type) {
      this.highlightCouponBtn(this.$route.query.coupon_type)
    } else {
      this.allActive = true
    }
  },
  mounted () {
    this.loadModal()
  },
  methods: {
    highlightCouponBtn (type) {
      if (!(this.$route.query.coupon_type) && ((this.codeActive === false) && (this.dealActive === false))) {
        this.allActive = true
      }
      if (type === '') {
        this.allActive = true
        this.codeActive = false
        this.dealActive = false
      }
      if (type === 'CODE') {
        this.codeActive = true
        this.dealActive = false
        this.allActive = false
      }
      if (type === 'DEAL') {
        this.dealActive = true
        this.allActive = false
        this.codeActive = false
      }
    },
    selectCoupon (type) {
      this.highlightCouponBtn(type)
      const params = {
        storeWebSite: this.$route.params.subStore,
        couponType: type
      }
      this.$router.push(`/store/${this.$route.params.subStore}?coupon_type=${type}`)
      this.$axios.post(`http://47.241.6.230:8080/coupons-management/green/getStoreCouponList`, params).then(res => {
        this.couponList = res.data.data
      })
    },
    getDeal (item) {
      if (localStorage.getItem('couponItem') && JSON.parse(localStorage.getItem('couponItem')) && JSON.parse(localStorage.getItem('couponItem')) !== {}) {
        localStorage.removeItem('couponItem')
      }
      this.currCouponItem = item
      const url = `/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.id}`
      window.open(url)
      if (this.$route.query.c && (item.id === Number(this.$route.query.c))) {
        this.dialogVisible = true
      }
    },
    showCode (item) {
      this.currCouponItem = item
      this.dialogVisible = true
    },
    loadModal () {
      if (this.$route.query.c && this.$route.query.c !== null && this.$route.query.c !== '') {
        const currCouponId = Number(this.$route.query.c);
        const currCouponList = this.couponList.filter(item => item.id === currCouponId)
        this.currCouponItem = currCouponList[0]
        this.dialogVisible = true
      }
    }
  }
};
</script>

<style>
</style>
