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
    const { data } = await this.$axios.post('green/storeTypeList')
    store.commit('updateTopCategoryList', data.data)
    return data
  }
}
