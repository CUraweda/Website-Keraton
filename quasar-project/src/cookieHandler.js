import Cookies from 'js-cookie';

export default class {
  static setCookie(name, value, options = {}) {
    Cookies.set(name, value, options);
  }

  static getCookie(name) {
    return Cookies.get(name);
  }

  static removeCookie(name, options = {}) {
    Cookies.remove(name, options);
  }
}