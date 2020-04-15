<template>
  <div class="js-site-main site-main">
    <section class="page-title-banner category-banner d-none d-md-block">
      <div class="container text-center">
        <h1 class>
          Stores in
          <nuxt-link to="/">Cannabispromocodes.com</nuxt-link>
        </h1>
      </div>
    </section>

    <!-- Blog Background Overlay Blocks -->
    <section class="paginate-list-container-wrap mb-2 mb-md-2">
      <div class="container">
        <div class="row justify-content-center">
          <ul class="paginate-list col-12 d-flex flex-wrap justify-content-lg-center">
            <li v-for="item in storeTypeList" :key="item.id">
              <nuxt-link exact-active-class="active" :class="`word-${item.value}`" :to="`/store?word=${item.value}`" @click="storeTypeSearch" ref="typeWord">{{ item.value }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container-wrap mb-2">
      <div class="container store-grid-container" v-if="$route.fullPath === '/store' || $route.query.word === 'TOP'">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6 p-md-2 p-0" v-for="item in resData" :key="item.id">
            <nuxt-link
              class="cover-wrap"
              style="height: 176px;"
              :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`"
            >
              <div class="cover">
                <img
                  :src="`https://cannabispromocodes.com${item.logoUrl}`"
                  :alt="`${item.name} coupons`"
                  :title="item.name"
                />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div style="background-color: #fff" v-else>
        <div class="container store-list-container p-3">
          <div class="row text-left text-md-center">
            <div class="col-md-3 col-6" v-for="item in resData" :key="item.id">
              <nuxt-link :to="`/store/${item.website.replace('http://', '').replace('www.', '').replace('https://', '')}`">{{ item.name }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'store',
  watchQuery: ['word'],
  async asyncData (context) {
    // console.log(context)
    const params = {
      word: ''
    }
    if (context.route.fullPath === '/store') {
      params.word = ''
    }
    if (context.query) {
      if (context.query.word === 'TOP') {
        params.word = ''
      } else {
        params.word = context.query.word
      }
    }
    const { data } = await context.$axios.post(`http://47.241.6.230:8080/coupons-management/green/storeList`, params)
    console.log(data)
    return { resData: data.data.storePageData.pageData, sitePageInfo: data.data.sitePageInfo }
  },
  data () {
    return {
      resData: {},
      sitePageInfo: {},
      storeTypeList: [
        {
          id: 50,
          value: 'TOP'
        },
        {
          id: 1,
          value: 'A'
        },
        {
          id: 2,
          value: 'B'
        },
        {
          id: 3,
          value: 'C'
        },
        {
          id: 4,
          value: 'D'
        },
        {
          id: 5,
          value: 'E'
        },
        {
          id: 6,
          value: 'F'
        },
        {
          id: 7,
          value: 'G'
        },
        {
          id: 8,
          value: 'H'
        },
        {
          id: 9,
          value: 'I'
        },
        {
          id: 10,
          value: 'J'
        },
        {
          id: 11,
          value: 'K'
        },
        {
          id: 12,
          value: 'L'
        },
        {
          id: 13,
          value: 'M'
        },
        {
          id: 14,
          value: 'N'
        },
        {
          id: 15,
          value: 'O'
        },
        {
          id: 16,
          value: 'P'
        },
        {
          id: 17,
          value: 'Q'
        },
        {
          id: 18,
          value: 'R'
        },
        {
          id: 19,
          value: 'S'
        },
        {
          id: 20,
          value: 'T'
        },
        {
          id: 21,
          value: 'U'
        },
        {
          id: 22,
          value: 'V'
        },
        {
          id: 23,
          value: 'W'
        },
        {
          id: 24,
          value: 'X'
        },
        {
          id: 25,
          value: 'Y'
        },
        {
          id: 26,
          value: 'Z'
        },
        {
          id: 27,
          value: '0'
        },
        {
          id: 28,
          value: '1'
        },
        {
          id: 29,
          value: '2'
        },
        {
          id: 30,
          value: '3'
        },
        {
          id: 31,
          value: '4'
        },
        {
          id: 32,
          value: '5'
        },
        {
          id: 33,
          value: '6'
        },
        {
          id: 34,
          value: '7'
        },
        {
          id: 35,
          value: '8'
        },
        {
          id: 36,
          value: '9'
        }
      ]
    }
  },
  mounted () {
    this.bindCalssFn();
    console.log(this)
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
  methods: {
    bindCalssFn () {
      // console.log(this.$route)
      if (this.$route.fullPath === '/store') {
        this.$refs.typeWord[0].classList += ' active'
      }
    },
    async storeTypeSearch () {
      const params = {
        word: this.$route.query.word && this.$route.query.word === 'TOP' ? '' : this.$route.query.word
      }
      const { data } = await this.$axios.post(`http://47.241.6.230:8080/coupons-management/green/storeList`, params)
      return { resData: data.data.storePageData.pageData }
    }
  }
}
</script>

<style scoped>
  .cover-wrap .cover img {
    width: auto;
  }
</style>
