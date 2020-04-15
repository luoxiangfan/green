<template>
  <div class="js-site-main site-main">
    <section class="page-title-banner">
      <div class="container">
        <div class="row">
          <!-- Profle Content -->
          <div class="col-12">
            <h1></h1>
            <p>Update the most popular stores daily, Have the best coupons &amp; Deals!</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-wrap category-detail-container">
      <div class="container">
        <div class="row py-3">
          <!-- left side -->
          <div class="col-lg-3 pr-lg-0 d-none d-md-block">
            <div class="card mb-3">
              <div class="coupon-count">
                <p class="mb-0">{{ resData.couponPage.count }} Offers</p>
              </div>
            </div>

            <!-- Panel Header -->
            <div class="card category-list-card mb-3">
              <p class="card-title" style="font-size: 1.75rem">Categories</p>
              <div class="card-body">
                <div class="ml-4">
                  <p class="font-weight-bold" style="font-size:16px;">{{ $route.params.subCategory }}</p>

                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="item in resData.lowerTypes" :key="item.id">
                      <nuxt-link :to="`/category/${item.name.replace(/\s/g,'')}`" @click="categoryChange(item)">{{ item.name }}</nuxt-link>
                    </li>
                  </ul>

                  <p class="font-weight-bold mt-3">
                    <nuxt-link
                      style="color:inherit;font-size:16px;"
                      to="/category"
                    >
                      All
                      Categories
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>

            <!-- Panel Header -->
            <div class="card store-list-card">
              <p class="card-title" style="font-size: 1.75rem">Stores</p>

              <div class="card-body js-store-list">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="item in resData.storeList" :key="item.id">
                    <nuxt-link :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">{{ item.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-9 coupon-container">
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

            <div class="row" style="margin: 1rem -.5rem" v-if="couponPage.pageData.length !== 0">
              <!-- User Block -->

              <div class="col-sm-6 col-md-4 col-12 py-1 py-sm-2 px-2" v-for="(item, index) in couponPage.pageData" :key="index">
                <div class="coupon-item row no-gutters">
                  <div class="pic-box col-3 col-sm-12 d-flex flex-grow-0 justify-content-center">
                    <nuxt-link
                      class="cover-wrap position-relative"
                      url="https://www.neartomecbd.com"
                      :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                    >
                      <div class="cover">
                        <img
                          :src="`https://cannabispromocodes.com${item.storeLogo}`"
                          :alt="`${item.storeName} coupons`"
                        />
                      </div>

                      <span class="coupon-label coupon-label--code" v-if="item.couponType === 'CODE'">{{ item.couponType }}</span>
                      <span class="coupon-label coupon-label--deal" v-if="item.couponType === 'DEAL'">{{ item.couponType }}</span>
                    </nuxt-link>
                  </div>

                  <div class="info-box col-9 col-sm-12 d-flex flex-wrap align-content-between">
                    <!-- <nuxt-link
                      rel="nofollow"
                      :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?storeId=${item.storeId}&c=${item.couponId}`"
                      class="coupon-title text-left text-sm-center"
                    >
                      <h3>{{ item.title }}</h3>
                    </nuxt-link> -->
                    <div
                      @click="saveCurrCouponItem(item)"
                      class="coupon-title text-left text-sm-center"
                      style="cursor: pointer;"
                    >
                      <h3>{{ item.title }}</h3>
                    </div>

                    <div class="extra-info">
                      <span class="use-info">
                        <!-- <i class="fa fa-user mr-1" aria-hidden="true">12</i> USED -->
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

              <!-- pages.paginated -->

              <div class="col-12">
                <p class="ui-pagination">
                  <!-- <nuxt-link :to="`/category/${$route.params.subCategory}?page=${currPageNumber}`" id="pre-page" class="disable" @click="couponPagination">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </nuxt-link> -->
                  <span id="pre-page" class="disable" @click="couponOperation('pre')">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </span>

                  <span>{{ Number($route.query.page) ? Number($route.query.page) : currPageNumber }} / {{ couponPage.pageCount }}</span>

                  <!-- <nuxt-link
                    id="next-page"
                    :to="`/category/${$route.params.subCategory}?page=${currPageNumber}`"
                    class="active"
                    @click="couponPagination"
                  >
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </nuxt-link> -->
                  <span
                    id="next-page"
                    class="active"
                    @click="couponOperation('next')"
                  >
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
            <div class="row" style="margin: 1rem -.5rem" v-if="couponPage.pageData.length === 0">暂无数据</div>
          </div>
          <!-- End Profile Sidebar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category-subCategory',
  async asyncData (context) {
    console.log(context)
    const params = {
      couponType: (context.query.coupon_type && context.query.coupon_type !== null) ? context.query.coupon_type : '',
      typeName: context.params.subCategory,
      pageNumber: (context.query.page && context.query.page !== '') ? context.query.page : 1,
      pageSize: 30
    }
    const { data } = await context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/categorys`, params)
    return {
      resData: data.data,
      currPageNumber: data.data.couponPage.pageNumber,
      couponPage: data.data.couponPage
    }
  },
  data () {
    return {
      resData: {},
      couponPage: {},
      currPageNumber: 1,
      allActive: false,
      dealActive: false,
      codeActive: false,
      couponType: ''
    }
  },
  head () {
    return {
      title: this.resData.sitePageInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.resData.sitePageInfo.description },
        { hid: 'keywords', name: 'keywords', content: this.resData.sitePageInfo.keyWords }
      ]
    }
  },
  mounted () {
    console.log(this)
    if (this.$route.query.coupon_type) {
      this.highlightCouponBtn(this.$route.query.coupon_type)
      this.couponType = this.$route.query.coupon_type
    } else {
      this.allActive = true
    }
  },
  methods: {
    async categoryChange (item) {
      const params = {
        couponType: '',
        typeName: this.$route.params.subCategory,
        pageNumber: 1,
        pageSize: 30
      }
      const { data } = await this.$axios.post(`http://47.241.6.230:8080/coupons-management/green/categorys`, params)
      return { resData: data.data }
    },
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
        couponType: type,
        typeName: this.$route.params.subCategory,
        pageNumber: 1,
        pageSize: 30
      }
      this.couponType = type
      this.$router.push(`/category/${this.$route.params.subCategory}?coupon_type=${type}&page=${params.pageNumber}`)
      this.$axios.post('http://47.241.6.230:8080/coupons-management/green/getCouponPageForType', params).then(res => {
        console.log(res)
        if (res && res.data.code === 0) {
          this.couponPage = res.data.data.couponPage
          this.currPageNumber = res.data.data.couponPage.pageNumber
        }
      })
    },
    couponOperation (paginationType) {
      if (paginationType === '') {
        this.currPageNumber = 1;
      }
      if (paginationType === 'pre') {
        if (this.currPageNumber > 1) {
          this.currPageNumber = this.currPageNumber - 1;
        } else {
          this.currPageNumber = 1;
        }
      }
      if (paginationType === 'next') {
        if ((this.currPageNumber < this.couponPage.pageCount) && (this.couponPage.pageCount !== 0)) {
          this.currPageNumber = this.currPageNumber + 1;
        } else {
          this.currPageNumber = this.couponPage.pageCount;
        }
      }
      // if (this.$route.query.coupon_type) {
      //   couponType = this.$route.query.coupon_type
      // } else {
      //   couponType = ''
      // }
      // this.couponType = couponType
      this.highlightCouponBtn(this.couponType)
      this.$router.push(`/category/${this.$route.params.subCategory}?coupon_type=${this.couponType}&page=${this.currPageNumber}`)
      // this.currPageNumber = Number(this.$route.query.page)
      const params = {
        couponType: this.couponType,
        typeName: this.$route.params.subCategory,
        pageNumber: this.currPageNumber,
        pageSize: 30
      }
      this.$axios.post('http://47.241.6.230:8080/coupons-management/green/getCouponPageForType', params).then(res => {
        console.log(res)
        if (res && res.data.code === 0) {
          this.couponPage = res.data.data.couponPage
          this.currPageNumber = res.data.data.couponPage.pageNumber
        }
      })
      // return { couponPage: data.data, currPageNumber: data.data.couponPage.pageData.pageNumber }
    },
    saveCurrCouponItem (item) {
      console.log(item)
      localStorage.setItem('couponItem', JSON.stringify(item))
      this.$router.push(`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.couponId}`)
    }
  }
}
</script>

<style scoped>
  .cover-wrap .cover img {
    width: auto;
  }
</style>
