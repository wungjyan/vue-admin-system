import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/token'
import { resetRouter } from '@/router'

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
  },
  RESET_STATE: (state) => {
    Object.assign(state, { token: getToken() })
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
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        removeToken()
        resetRouter()
        commit('RESET_STATE')
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
      commit('RESET_STATE')
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
