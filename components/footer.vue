<template>
  <footer class="js-site-footer site-footer">
    <div class="container pt-md-5 pt-3">
      <div class="row">
        <!-- Footer Content -->
        <div class="col-md-3 col-12 mb-4 d-none d-md-block">
          <a rel="nofollow">
            <img
              style="height: auto;"
              class="img-fluid logo"
              alt="Cannabis Promo Codes"
              src="~/assets/img/cannabis.jpg"
            />
          </a>
          <!-- <p>Help you get best deal.</p> -->
        </div>
        <!-- End Footer Content -->

        <!-- Footer Content -->
        <div class="col-md-3 col-6 mb-4">
          <p>Cannabispromocodes.com</p>

          <ul>
            <li>
              <nuxt-link
                class="link"
                to="/about"
              >About us</nuxt-link>
            </li>
            <li>
              <nuxt-link class to="/contact">Contact us</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- End Footer Content -->

        <!-- Footer Content -->
        <div class="col-md-3 col-6 mb-4">
          <p class>Sitemap</p>

          <ul>
            <li>
              <nuxt-link class to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link class to="/store">Stores</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- End Footer Content -->

        <!-- Footer Content -->
        <div class="col-md-3 col-12 mb-4">
          <p>Our Contacts</p>

          <address class>
            <p class="mb-0">552 Franklin Street, Orange California, US</p>
            <a rel="nofollow" href="mailto:cannabispromocodes@gmail.com" class>
              <i class="fa fa-envelope-o mr-1"></i> cannabispromocodes@gmail.com
            </a>
          </address>
        </div>
        <!-- End Footer Content -->
      </div>
    </div>
    <!-- End Footer -->

    <!-- Copyright Footer -->
    <footer class="site-copyright container-wrap">
      <div class="container">
        <div class="row">
          <div class="col-8 col-md-6 px-0 px-md-4">
            <div class="text-right">
              <small class>Copyright @ 2019-2022. All Rights Reserved.</small>
            </div>
          </div>

          <div class="col-4 col-md-6">
            <ul class="list-inline m-0 text-left">
              <li
                class="list-inline-item mr-3 mr-md-5"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Facebook"
              >
                <a
                  href="https://www.facebook.com/CPA-136028583717425/"
                  rel="nofollow"
                  class="g-color-white-opacity-0_5 g-color-white--hover"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="Twitter"
              >
                <a
                  href="https://twitter.com/CouponPa"
                  rel="nofollow"
                  class="g-color-white-opacity-0_5 g-color-white--hover"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Copyright Footer -->

    <a
      rel="nofollow"
      class="js-go-to u-go-to-top u-go-to-v1 animated"
      href="#"
      data-type="fixed"
      data-position="{
                    &quot;bottom&quot;: 15,
                    &quot;right&quot;: 15
                  }"
      data-offset-top="400"
      data-compensation="#js-header"
      data-show-effect="zoomIn"
      style="display: inline-block; position: fixed; opacity: 1; bottom: 15px; right: 15px;"
    >
      <i class="fa fa-angle-up"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'GFooter'
}
</script>

<style scoped>
</style>
