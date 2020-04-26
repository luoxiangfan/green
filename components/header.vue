<template>
  <header id="js-header" class="js-site-header u-header mb-2 mb-lg-0">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo -->
        <nuxt-link to="/" class="navbar-brand mr-4">
          <img
            style="width: auto;"
            alt="cannabis coupons - cannabispromocodes.com"
            src="/img/cannabis.jpg"
          />
        </nuxt-link>
        <!-- End Logo -->

        <!-- Navigation -->
        <div class="flex-grow-1">
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item-top-stores nav-item ml-0 d-none d-lg-inline-block">
              <nuxt-link
                tag="div"
                class="nav-link"
                to="/store"
                active-class="active"
              >
                <a href="" style="text-decoration: none;color: #151515;font-size: 15px;font-weight: 500;">Top Stores</a>
              </nuxt-link>
            </li>

            <li class="nav-item nav-item-category d-none d-lg-inline-block">
              <nuxt-link
                tag="div"
                class="nav-link"
                to="/category"
                active-class="active"
              >
                <a href="" style="text-decoration: none;color: #151515;font-size: 15px;font-weight: 500;">Categories</a>
              </nuxt-link>
              <ul class="list-group category-list">
                <nuxt-link
                  v-for="item in topCategoryList.storeTypeList"
                  :key="item.id"
                  :to="`/category/${item.name.replace(' ', '')}`"
                  class="list-group-item list-group-item-action"
                >{{ item.name }}</nuxt-link>
              </ul>
            </li>

            <li class="nav-item nav-item__search">
              <form class="js-head-search-form">
                <!-- Search Field -->
                <div class="input-group">
                  <input
                    type="search"
                    class="js-search__input form-control"
                    placeholder="Search for stores, offers or brands"
                    title="Search for stores, offers or brands"
                    data-provide="typeahead"
                    required
                    autocomplete="off"
                    aria-label="Search for stores, offers or brands"
                    id="header_search_input"
                    name="search"
                    v-model="word"
                    @input="querySearch"
                    @blur="clearSearchList"
                    @mouseover="reset"
                  />
                  <input style="display:none" />
                  <ul
                    id="header_search_ul"
                    class="typeahead dropdown-menu"
                    role="listbox"
                    style="top: 34px; left: 0px;"
                  >
                    <div>
                      <li
                        class
                        v-for="item in resData.stores"
                        :key="item.id"
                        @click="$emit('close')"
                      >
                        <a
                          class="dropdown-item"
                          :href="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
                        >
                          <div class="typeahead search-result">
                            <div class="img-text-wrap">
                              <img
                                :src="`https://cannabispromocodes.com${item.logoUrl}`"
                                class="pic"
                              />
                              <div>
                                <strong>{{ item.name }}</strong> -- Store
                              </div>
                            </div>
                            <p class="count">{{ item.couponNum }} offers</p>
                          </div>
                        </a>
                      </li>
                      <li class v-for="item in resData.storeTypes" :key="item.id">
                        <a
                          class="dropdown-item"
                          :href="`/category/${item.name.replace(' ', '')}`"
                        >
                          <div class="typeahead search-result">
                            <div>
                              <strong>{{ item.name }}</strong>
                              <span>-- Category</span>
                            </div>
                            <p class="count">more categories</p>
                          </div>
                        </a>
                      </li>
                    </div>
                  </ul>
                  <button class="btn" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
                <!-- End Search Field -->
              </form>
            </li>
          </ul>
        </div>
        <!-- End Navigation -->
      </div>

      <!-- for mobile -->
      <div class="container d-flex d-lg-none">
        <nav class="nav mobile-nav">
          <nuxt-link to="/" class="nav-item-home nav-link" exact-active-class="active">Home</nuxt-link>
          <nuxt-link to="/store" class="nav-item-top-stores nav-link" exact-active-class="active">Top Stores</nuxt-link>
          <nuxt-link to="/topCoupons" class="nav-item-top-coupons nav-link" exact-active-class="active">Top Coupons</nuxt-link>
          <nuxt-link to="/category" class="nav-item-category nav-link" exact-active-class="active">Category</nuxt-link>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
import $ from 'jquery';
import { mapState } from "vuex";
export default {
  name: "GHeader",
  data () {
    return {
      word: "",
      resData: {
        storeTypes: [],
        stores: []
      },
      showHideSerachList: false
    };
  },
  computed: {
    ...mapState({
      topCategoryList: state => state.category.topCategoryList
    })
  },
  mounted () {
    // console.log($);
    $('#header_search_input').blur(function () {
      setTimeout(function () {
        $('#header_search_ul').hide()
      }, 700)
    })
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
              this.resData = {
                storeTypes: resp.data.data.storeTypes,
                stores: resp.data.data.stores
              };
              $('#header_search_ul').show()
              this.showHideSerachList = true;
            } else {
              this.showHideSerachList = false;
              $('#header_search_ul').hide()
              this.resData = {
                storeTypes: [],
                stores: []
              };
            }
          });
      } else {
        this.showHideSerachList = false;
        $('#header_search_ul').hide()
        this.resData = {
          storeTypes: [],
          stores: []
        };
      }
    },
    clearSearchList () {
      this.showHideSerachList = false
      // this.word = ''
    },
    reset (e) {
      window.event ? window.event.cancelBubble = true : e.stopPropagation();
      if (this.word === '') {
        this.resData = {
          storeTypes: [],
          stores: []
        }
        this.showHideSerachList = false
      }
    }
  }
};
</script>

<style>
</style>
