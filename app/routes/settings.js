import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsRoute extends Route {
  @service localStorageExtra;

  model() {
    return this.localStorageExtra.read('settings', {
      parse: true,
      default: {},
    });
  }
}
