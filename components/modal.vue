<template>
  <div
    class="modal fade store-detail-modal js-modal get_code_121525 show modal-bgc"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body" style="padding: 30px;">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div class="row">
            <div class="col-12 col-md-3 d-flex justify-content-center align-items-center" @click="$emit('close')">
              <nuxt-link class="cover" v-if="currCouponItem && currCouponItem !== {}" :to="`/store/${currCouponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`">
                <img
                  :alt="currCouponItem.name"
                  :src="`https://cannabispromocodes.com${currCouponItem.storeLogo}`"
                />
              </nuxt-link>
              <nuxt-link class="cover" v-if="couponItem && currCouponItem === undefined && couponItem !== {}" :to="`/store/${couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '')}`">
                <img
                  :alt="couponItem.storeName"
                  :src="`https://cannabispromocodes.com${couponItem.storeLogo}`"
                />
              </nuxt-link>
            </div>
            <div class="text-content col-12 col-md-9" v-if="couponItem && currCouponItem === undefined && couponItem !== {}">
              <p
                class="coupon-title"
                style="font-size: 1.75rem"
              >{{ couponItem.title }} {{ couponItem.couponType }}</p>
              <p class="coupon-source">
                <span style="color: #7D7D7D;" class="mr-1">{{ couponItem.storeName }}</span>
                <a
                  style="color: #269AC8;font-size: 12px;"
                  rel="nofollow"
                  :href="couponItem.link"
                  target="_blank"
                >{{ couponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '') }}</a>
              </p>

              <div class="code-box" v-if="couponItem.couponType === 'CODE'">
                <p id="foo">{{ couponItem.code }}</p>
                <button ref="copy" @click="copyLink" data-clipboard-target="#foo" class="btn copy_code" id="copy_code">
                  COPY
                  <span class="d-none d-md-inline">CODE</span>
                </button>
              </div>
              <div class="link-box" v-if="couponItem.couponType === 'DEAL'">
                <a href="https://www.baidu.com" class="btn" target="_blank">GO TO WEBSITE</a>
              </div>
            </div>
            <div class="text-content col-12 col-md-9" v-if="currCouponItem && currCouponItem !== undefined && currCouponItem !== {}">
              <p
                class="coupon-title"
                style="font-size: 1.75rem"
              >{{ currCouponItem.title }} {{ currCouponItem.couponType }}</p>
              <p class="coupon-source">
                <span style="color: #7D7D7D;" class="mr-1">{{ currCouponItem.storeName }}</span>
                <a
                  style="color: #269AC8;font-size: 12px;"
                  rel="nofollow"
                  :href="currCouponItem.link"
                  target="_blank"
                >{{ currCouponItem.storeWebSite.replace('http://', '').replace('www.', '').replace('https://', '') }}</a>
              </p>

              <div class="code-box" v-if="currCouponItem.couponType === 'CODE'">
                <p id="foo">{{ currCouponItem.code }}</p>
                <button ref="copy" @click="copyLink" data-clipboard-target="#foo" class="btn copy_code" id="copy_code">
                  COPY
                  <span class="d-none d-md-inline">CODE</span>
                </button>
              </div>
              <div class="link-box" v-if="currCouponItem.couponType === 'DEAL'">
                <a :href="currCouponItem.link" class="btn" target="_blank">GO TO WEBSITE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  name: "modal",
  props: ["dialogVisible", "currCouponItem"],
  data () {
    return {
      copyBtn: null,
      couponItem: (localStorage.getItem('couponItem') && JSON.parse(localStorage.getItem('couponItem')) && JSON.parse(localStorage.getItem('couponItem')) !== {}) ? JSON.parse(localStorage.getItem('couponItem')) : {}
    };
  },
  computed: {

  },
  mounted () {
    console.log(this);
    // this.currCouponItem = this.couponItem
    // if (this.currCouponItem.couponType === 'CODE') {
    //   this.copyBtn = new ClipboardJS(this.$refs.copy);
    // }
    if (this.couponItem && this.currCouponItem === undefined && this.couponItem.couponType) {
      if (this.couponItem.couponType === 'CODE') {
        this.copyBtn = new ClipboardJS(this.$refs.copy);
      }
    }
    if (this.currCouponItem && this.currCouponItem !== undefined && this.currCouponItem.couponType) {
      if (this.currCouponItem.couponType === 'CODE') {
        this.copyBtn = new ClipboardJS(this.$refs.copy);
      }
    }
  },
  methods: {
    copyLink () {
      const _this = this;
      const clipboard = this.copyBtn;
      clipboard.on("success", function () {
        _this.$refs.copy.textContent = 'Copied!'
      });
    }
  }
};
</script>

<style scoped>
  body {
    overflow: hidden;
  }
</style>
