export const state = () => ({
  isMobile: false,
  homePageData: {}
})

export const mutations = {
  updateMobileState (state, action) {
    state.isMobile = action
  },
  updateHomePageData (state, action) {
    state.homePageData = action
  }
}

export const actions = {
  async getHomePageData (store) {
    const { data } = await this.$axios.post('green/index')
    store.commit('updateHomePageData', data.data)
    return data
  }
}
