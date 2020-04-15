<template>
  <div class="js-site-main site-main">
    <!-- Search Banner -->
    <section
      class="container-fluid search-banner d-none d-md-block"
      style="background-image: url(/img/search-bg.jpg)"
    >
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <!-- Search Field -->
          <h1
            class
            style="font-size: 38px;color: #fff; letter-spacing: 0;text-align: center;margin-bottom: 18px"
          >Various Cannabis Coupon Codes Online all Web</h1>

          <div class="input-group input-group-lg">
            <input
              type="search"
              class="js-search__input form-control"
              placeholder="Search for stores, offers or brands"
              data-provide="typeahead"
              autocomplete="off"
              aria-label="Search for stores, offers or brands"
              name="search"
              id="index_search_input"
              v-model="word"
              @input="querySearch"
              @focus="querySearch"
              @blur="showHideSerachList = false"
            />
            <ul
              class="typeahead dropdown-menu search-ul"
              :class="{ show: showHideSerachList}"
              role="listbox"
              style="top: 44px; left: 0px;"
              id="index_search_ul"
            >
              <div>
                <li class v-for="item in searchData.stores" :key="item.id">
                  <nuxt-link
                    class="dropdown-item"
                    :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                  >
                    <div class="typeahead search-result">
                      <div class="img-text-wrap">
                        <img :src="`https://cannabispromocodes.com${item.logoUrl}`" class="pic" />
                        <div>
                          <strong>{{ item.name }}</strong> -- Store
                        </div>
                      </div>
                      <p class="count">{{ item.couponNum }} offers</p>
                    </div>
                  </nuxt-link>
                </li>
                <li class v-for="item in searchData.storeTypes" :key="item.id">
                  <nuxt-link class="dropdown-item" :to="`/category/${item.name.replace(' ', '')}`">
                    <div class="typeahead search-result">
                      <div>
                        <strong>{{ item.name }}</strong>
                        <span>-- Category</span>
                      </div>
                      <p class="count">more categories</p>
                    </div>
                  </nuxt-link>
                </li>
              </div>
            </ul>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- End Search Field -->
      </div>
    </section>
    <!-- End Search Banner -->

    <!-- Top Stores -->
    <div class="top-store-container-wrap mb-2 mb-sm-0">
      <section class="container">
        <h2 class="section-title">Top Stores</h2>
        <div class="row">
          <div
            class="col-6 col-md-4 col-lg-5-1 p-2"
            style="height: 187px"
            v-for="item in resData.data.RMstore"
            :key="item.id"
          >
            <nuxt-link
              class="store-grid-item cover-wrap"
              :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
            >
              <div class="cover">
                <img
                  :src="`https://cannabispromocodes.com${item.logoUrl}`"
                  class="align-self-center"
                  :alt="`${item.name} coupons`"
                  :title="item.name"
                />
              </div>
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <!-- End Top Stores -->

    <!-- Top Coupons -->
    <div class="container-wrap mb-2 mb-sm-0">
      <section class="container top-coupon-section">
        <h2 class="section-title">Top Coupons</h2>
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 px-2 py-0 py-sm-2"
            v-for="item in resData.data.RMcoupon"
            :key="item.id"
          >
            <div class="coupon-item row no-gutters">
              <div class="pic-box col-3 col-sm-12 d-flex flex-grow-0 justify-content-center">
                <nuxt-link
                  class="cover-wrap position-relative"
                  :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                >
                  <div class="cover">
                    <img
                      :src="`https://cannabispromocodes.com${item.storeLogeUrl}`"
                      :alt="`${item.storeName} coupons`"
                    />
                  </div>

                  <span class="coupon-label coupon-label--code">{{ item.couponType }}</span>
                </nuxt-link>
              </div>

              <div class="info-box col-9 col-sm-12 d-flex flex-wrap align-content-between">
                <nuxt-link
                  rel="nofollow"
                  class="get_deal coupon-title text-left text-sm-center"
                  :to="`/store/${item.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}?c=${item.outSiteCouponId}`"
                >
                  <h3>{{ item.name }}</h3>
                </nuxt-link>

                <div class="extra-info">
                  <span class="use-info d-none">
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

    <!-- Top Categories -->
    <div class="container-wrap expand-container-wrap mb-2">
      <section class="container top-categories-section">
        <h2 class="section-title">
          Top Categories
          <a
            href="#top-categories-content"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            class="collapsed"
            aria-controls="top-categories-content"
          ></a>
        </h2>

        <div class="show visible-md">
          <div class="row">
            <div
              class="col-12 col-sm-4 col-md-3 col-lg-2 p-sm-2"
              v-for="item in resData.data.storeType"
              :key="item.id"
            >
              <div class="category-item">
                <nuxt-link class="category-title" :to="`/category/${item.name.replace(' ', '')}`">
                  <p>{{ item.name }}</p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div id="top-categories-content" class="collapse">
          <div class="row"></div>
        </div>
      </section>
    </div>
    <!-- End Top Categories -->

    <!-- Popular Stores -->
    <div class="popular-store-container-wrap expand-container-wrap mb-2 mb-md-3">
      <section class="container">
        <h2 class="section-title">
          Popular Stores
          <a
            href="#popular-store-content"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            class="collapsed"
            aria-controls="popular-store-content"
          >
            <i class="fa fa-chevron-up d-inline d-sm-none float-right"></i>
          </a>
        </h2>

        <div class="popular-store-content show visible-md">
          <div class="row">
            <div
              class="store-name-wrap col-12 col-md-4 col-lg-5-1 mb-3 mb-md-4"
              v-for="item in resData.data.TJstore"
              :key="item.id"
            >
              <nuxt-link
                :to="`/store/${item.webSite.replace('http://', '').replace('www.', '').replace('https://', '')}`"
              >{{ item.storeName }}</nuxt-link>
            </div>
          </div>
        </div>

        <div id="popular-store-content" class="popular-store-content collapse">
          <div class="row"></div>
        </div>
      </section>
    </div>
    <!-- End Popular Stores -->
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.post(
      `http://47.241.6.230:8080/coupons-management/green/index`
    );
    console.log(data);
    return {
      resData: data,
      sitePageInfo: data.data.sitePageInfo
    };
  },
  data () {
    return {
      resData: {},
      word: "",
      searchData: {
        storeTypes: [],
        stores: []
      },
      showHideSerachList: false,
      sitePageInfo: {}
    };
  },
  head () {
    return {
      title: this.sitePageInfo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.sitePageInfo.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.sitePageInfo.keyWords
        }
      ]
    };
  },
  mounted () {
    // console.log(this)
    if (this.word === "") {
      this.searchData = {
        storeTypes: [],
        stores: []
      };
    }
  },
  methods: {
    querySearch () {
      const params = {
        keys: this.word
      };
      if (params.keys && params.keys !== "") {
        this.$axios
          .post(
            "http://47.241.6.230:8080/coupons-management/green/getSearch",
            params
          )
          .then(resp => {
            if (
              resp &&
              resp.data.data &&
              (resp.data.data.storeTypes.length !== 0 ||
              resp.data.data.stores.length !== 0)
            ) {
              this.searchData = {
                storeTypes: resp.data.data.storeTypes,
                stores: resp.data.data.stores
              };
              this.showHideSerachList = true;
            } else {
              this.showHideSerachList = false;
              this.searchData = {
                storeTypes: [],
                stores: []
              };
            }
          });
      } else {
        this.showHideSerachList = false;
        this.searchData = {
          storeTypes: [],
          stores: []
        };
      }
    }
  }
};
</script>

<style scoped>
.not_show {
  display: none;
}
.show {
  display: block;
}
.section-padding {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.cover-wrap .cover img {
  width: auto;
}
.input-group:hover .search-ul {
  display: block;
}
</style>
