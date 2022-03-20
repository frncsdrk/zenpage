import Service from '@ember/service';

export default class LocalStorageService extends Service {
  write(key, value) {
    localStorage.setItem(key, value);
    return true;
  }

  read(key) {
    return localStorage.getItem(key);
  }

  delete(key) {
    localStorage.removeItem(key);
    return true;
  }

  clear() {
    localStorage.clear();
    return true;
  }
}
