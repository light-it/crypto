export class SessionService {

  public static get userInfo() {
    return JSON.parse(localStorage.getItem('app.currentUser'));
  }

  public static set userInfo(data) {
    localStorage.setItem('app.currentUser', JSON.stringify(data));
  }

  public static clearStorage() {
    localStorage.clear();
  }
}
