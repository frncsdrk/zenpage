import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | settings-form', function (hooks) {
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

    await render(hbs`<SettingsForm @settings={{this.settings}} />`);

    assert
      .dom(this.element)
      .hasText(
        'Hide Search Bar Hide Time Display Hide Info Button Search engine presets DuckDuckGo Ecosia Custom e.g. Select a preconfigured search engine Search engine query URL e.g. https://duckduckgo.com?q= Configure background image Background URL e.g. https://images.unsplash.com/photo-1645988293350-37598d35ba3c Reset Apply'
      );
  });
});
