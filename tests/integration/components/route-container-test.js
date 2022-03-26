import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | route-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('settings', {
      hideSearchBar: true,
      hideTimeDisplay: true,
      searchEnginePreset: 'duckduckgo',
      searchEngineUrl: 'https://duckduckgo.com?q=',
    });

    await render(hbs`<RouteContainer @settings={{this.settings}} />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <RouteContainer @settings={{this.settings}}>
        template block text
      </RouteContainer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
