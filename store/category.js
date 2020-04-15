export const state = () => ({
  topCategoryList: {}
})

export const mutations = {
  updateTopCategoryList (state, data) {
    state.topCategoryList = data;
  }
}

export const actions = {
  async getTopCategoryList (store) {
    const { data } = await this.$axios.post('http://47.241.6.230:8080/coupons-management/green/storeTypeList')
    store.commit('updateTopCategoryList', data.data)
    return data
  }
}
