import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | time-display', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    function prependZero(value) {
      return value < 10 ? '0' + value.toString() : value.toString();
    }

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    await render(hbs`<TimeDisplay />`);

    assert
      .dom(this.element)
      .hasText(`${prependZero(hours)}:${prependZero(minutes)}`);
  });
});
