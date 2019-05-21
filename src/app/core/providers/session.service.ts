export class SessionService {

  /**
   * Used for retrieve info about the user from localStorage
   * @returns object User or null
   */
  public static get userInfo() {
    return JSON.parse(localStorage.getItem('app.currentUser'));
  }

  /**
   * Used to record info about user in the localStorage
   * @param data - object User
   */
  public static set userInfo(data) {
    localStorage.setItem('app.currentUser', JSON.stringify(data));
  }

  /**
   * Get token from LS, used in guards, for checking if the user is logged in
   * @returns token
   */
  public static get token() {
    const data = JSON.parse(localStorage.getItem('app.currentUser'));
    return data ? data.key : null;
  }

  public static set permissions(data) {
    localStorage.setItem('app.permissions', data);
  }

  public static get permissions() {
    return JSON.parse(localStorage.getItem('app.permissions'));
  }

  /**
   * Using in trustbox letters
   * @param key - unique users key
   */
  public static set identifier(key) {
    localStorage.setItem('app.identifier', JSON.stringify(key));
  }

  public static get identifier() {
    return JSON.parse(localStorage.getItem('app.identifier'));
  }

  public static clearStorage() {
    localStorage.clear();
  }
}
