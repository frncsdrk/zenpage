import Service from '@ember/service';

export default class LocalStorageExtraService extends Service {
  write(key, value) {
    localStorage.setItem(key, value);
    return true;
  }

  read(key, options) {
    const item = localStorage.getItem(key);
    if (!item && options.default) {
      return options.default;
    } else if (!item) {
      return undefined;
    } else {
      return options.parse ? JSON.parse(item) : item;
    }
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
