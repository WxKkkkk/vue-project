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
    GetCategoryListMutation (state, datas) {
      state.CategoryList = []
      state.CategoryList = datas
    },
    GetSmallListMutation (state, datas) {
      state.CategorySmallList = []
      state.CategorySmallList = datas
    }
  },
  actions: {
    getCategoryList (store) {
      Axios({
        url: `lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577061675581&act=mobile_cate&op=index`,
        method: 'post'
      }).then(res => {
        store.commit('GetCategoryListMutation', res.data.datas)

        if (store.state.CategorySmallList.length === 0) {
          Axios({
            method: 'post',
            url: `lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577061675581&act=mobile_cate&op=index`,
            data: {
              gc_id: res.data.datas[0].gc_id
            },
            transformRequest: [
              function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                ret = ret.substring(0, ret.lastIndexOf('&'))
                return ret
              }
            ],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            store.commit('GetSmallListMutation', res.data.datas)
          })
        }
      })
    },
    getCategorySmallList (store, id) {
      Axios({
        method: 'post',
        url: `lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577061675581&act=mobile_cate&op=index`,
        data: {
          gc_id: id
        },
        transformRequest: [
          function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            ret = ret.substring(0, ret.lastIndexOf('&'))
            return ret
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        store.commit('GetSmallListMutation', res.data.datas)
      })
    }
  },
  modules: {}
})
