import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/token'

const state = {
  token: getToken(),
  name: ''
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_NAME (state, name) {
    state.name = name
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { nickName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ nickName, password }).then(res => {
        const { data } = res.data
        console.log(res)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
        const { data } = res.data
        const name = data.userInfo.nickName
        commit('SET_NAME', name)
        resolve(data.userInfo)
      }).catch(error => {
        console.log('error:', error)
        reject(error)
      })
    })
  },
  resetToken ({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('SET_TOKEN', '')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
