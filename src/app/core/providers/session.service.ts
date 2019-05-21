export class SessionService {

  /**
   * Used for retrieve info about the user from localStorage
   * @returns object User or null
   */
  public static get userInfo() {
    return JSON.parse(localStorage.getItem('ltp.currentUser'));
  }

  /**
   * Used to record info about user in the localStorage
   * @param data - object User
   */
  public static set userInfo(data) {
    localStorage.setItem('ltp.currentUser', JSON.stringify(data));
  }

  /**
   * Get token from LS, used in guards, for checking if the user is logged in
   * @returns token
   */
  public static get token() {
    const data = JSON.parse(localStorage.getItem('ltp.currentUser'));
    return data ? data.key : null;
  }

  public static set permissions(data) {
    localStorage.setItem('ltp.permissions', data);
  }

  public static get permissions() {
    return JSON.parse(localStorage.getItem('ltp.permissions'));
  }

  /**
   * Using in trustbox letters
   * @param key - unique users key
   */
  public static set identifier(key) {
    localStorage.setItem('ltp.identifier', JSON.stringify(key));
  }

  public static get identifier() {
    return JSON.parse(localStorage.getItem('ltp.identifier'));
  }

  public static clearStorage() {
    localStorage.clear();
  }
}
