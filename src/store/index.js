import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CategoryList: [],
    CategorySmallList: []
  },
  mutations: {
    GetCategoryListMutation (state, data) {
      state.CategoryList = data
    },
    GetSmallListMutation (state, data) {
      state.CategorySmallList = data
    }
  },
  actions: {
    getCategoryList (store) {
      Axios({
        url: `https://mobileway.lecuntao.com/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577061675581&act=mobile_cate&op=index`,
        method: 'post'
      }).then(res => {
        store.commit('GetCategoryListMutation', res.data.datas)
      })
    },
    getCategorySmallList (store, id) {
      Axios({
        url: `https://mobileway.lecuntao.com/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577063742794&act=mobile_cate&op=index`,
        method: 'post'
      }).then(res => {
        store.commit('GetSmallListMutation', res.data.datas)
      })
    }
  },
  modules: {}
})
