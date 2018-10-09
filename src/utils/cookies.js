class CookiesClass {

  constructor () {
    // if (!document.cookie) {
    //   throw new Error('cookies not support')
    // }
  }

  /**
   * 获取cookies
   * @param {string} name 
   */
  get (name) {
    let arr
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2])
    } else {
      return null
    }
  }

  /**
   * 删除cookies
   * @param {string} name 
   */
  del (name) {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.get(name)
    if (cval !== null) {
      document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`
    }
  }
}

const CO = new CookiesClass()

export default CO
