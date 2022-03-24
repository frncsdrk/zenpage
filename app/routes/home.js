import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service localStorageExtra;

  model() {
    return this.localStorageExtra.read('settings', {
      parse: true,
      default: {
        hideSearchBar: true,
        hideTimeDisplay: true,
      },
    });
  }
}
