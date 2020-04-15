export const state = () => ({
  searchResultList: []
})

export const mutations = {
  updateSearchResultList (state, data) {
    state.searchResultList = data;
  }
}

export const actions = {
  async getTopCategoryList (store) {
    const { data } = await this.$axios.post('http://47.241.6.230:8080/coupons-management/green/storeTypeList')
    store.commit('updateSearchResultList', data.data)
    return data
  }
}
