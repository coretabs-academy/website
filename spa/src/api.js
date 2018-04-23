import axios from 'axios'

export default {
   install: (Vue) => {
      // Vue.$http = ''
      Vue.prototype.$http = {
         async get(url) {
            return new Promise((resolve, reject) => {
               axios.get(url)
                  .then(result => {
                     resolve(result.data)
                  }, error => {
                     reject(error)
                  })
            })
         }
      }
      Vue.prototype.$api = {
         b64DecodeUnicode(str) {
            return decodeURIComponent(atob(str).split('').map(function(c) {
               return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            }).join(''))
         },
         b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
               function toSolidBytes(match, p1) {
                  return String.fromCharCode('0x' + p1)
               }))
         }
      }
   }
}
