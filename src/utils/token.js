import Cookie from 'js-cookie'

const TokenKey = 'vue-admin-token'

export function getToken () {
  return Cookie.get(TokenKey)
}

export function setToken (token) {
  Cookie.set(TokenKey, token)
}

export function removeToken () {
  return Cookie.remove(TokenKey)
}
