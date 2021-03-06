import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CategoryDetailpages: 0,
    isprovince: true,
    provinceid: Number,
    provincename: String,
    cityname: String,
    CategoryList: [],
    CategorySmallList: [],
    CategoryDetailList: [],
    HotSearchList: [],
    HistorySearchList: [],
    orderList: []
  },

  mutations: {
    GetCategoryListMutation (state, datas) {
      state.CategoryList = []
      state.CategoryList = datas
    },
    GetCategorySmallListMutation (state, datas) {
      state.CategorySmallList = []
      state.CategorySmallList = datas
    },
    GetCategoryDetailMutation (state, parameters) {
      if (parameters[2] === 1) {
        state.CategoryDetailList = state.CategoryDetailList.concat(parameters[0])
      } else {
        state.CategoryDetailList = []
        state.CategoryDetailList = parameters[0]
      }

      if (state.CategoryDetailpages !== parameters[1]) {
        state.CategoryDetailpages = parameters[1]
      }
    },
    GetHotSearchListMutation (state, datas) {
      state.HotSearchList = []
      state.HotSearchList = datas
    },
    clearAll (state) {
      state.HistorySearchList = []
    },
    addHistory (state, historylist) {
      state.HistorySearchList.push(historylist)
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
            store.commit('GetCategorySmallListMutation', res.data.datas)
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
        store.commit('GetCategorySmallListMutation', res.data.datas)
      })
    },
    getCategoryDetailList (store, parameters) {
      Axios({
        method: 'post',
        url: `lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577150269136&act=goods&op=goodsList`,
        data: {
          provinc: parameters[0],
          city: parameters[1],
          keyword: '',
          page: parameters[2],
          sorted: parameters[3],
          sequence: parameters[4],
          gcId: parameters[5],
          workshop: ''
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
        store.commit('GetCategoryDetailMutation', [res.data.datas.list, res.data.datas.page_count, parameters[6]])
      })
    },
    getHotSearchList (store) {
      Axios({
        url: `lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577346317181&act=goods&op=hotWord`,
        method: 'post'
      }).then(res => {
         store.commit('GetHotSearchListMutation', res.data.datas.list)
      })
    },
    getCategoryDetailListFromSearch (store, parameters) {
      Axios({
        method: 'post',
        url: `lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1577357244895&act=goods&op=goodsList`,
        data: {
          provinc: parameters[0],
          city: parameters[1],
          keyword: parameters[2],
          page: parameters[3],
          coupon_id: null,
          sorted: parameters[4],
          sequence: parameters[5],
          start_price: null,
          ent_price: null,
          goods_from: parameters[6],
          key: null,
          store_id: null
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
        store.commit('GetCategoryDetailMutation', [res.data.datas.list, res.data.datas.page_count, parameters[7]])
      })
    }
  },
  modules: {}
})
