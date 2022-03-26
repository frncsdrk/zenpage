import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
  @service router;

  constructor() {
    super(...arguments);
    document.addEventListener('keypress', (event) => {
      this.onKeypress(this, event);
    });
  }

  onKeypress(context, event) {
    const shortcuts = {
      s: () => {
        context.router.transitionTo('settings');
      },
    };

    if (shortcuts[event.key]) {
      shortcuts[event.key]();
    }
  }
}
