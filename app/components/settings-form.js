import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsFormComponent extends Component {
  @service localStorageExtra;

  settings = this.args.settings;
  @tracked hideSearchBar = typeof this.settings.hideSearchBar;
  @tracked configureSearch = this.settings.configureSearch;
  @tracked searchEngineUrl = this.settings.searchEngineUrl || '';
  @tracked hideTimeDisplay = this.settings.hideTimeDisplay;

  @action
  apply() {
    this.settings = {
      hideSearchBar: this.hideSearchBar,
      configureSearch: this.configureSearch,
      searchEngineUrl: this.searchEngineUrl,
      hideTimeDisplay: this.hideTimeDisplay,
    };
    console.log('settings:', this.settings);
    // TODO: Write to localStorage
    this.localStorageExtra.write('settings', this.settings, {
      stringify: true,
    });
  }
}
