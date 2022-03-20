import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SettingsFormComponent extends Component {
  settings = this.args.settings;
  @tracked configureSearch = this.settings.configureSearch;
  @tracked searchEngineUrl = this.settings.searchEngineUrl;

  // TODO: Use set helper in template and setter
  @action
  setConfigureSearch(event) {
    this.configureSearch = event.target.checked;
  }

  @action
  apply() {
    this.settings = {
      configureSearch: this.configureSearch,
    };
    console.log('settings:', this.settings);
    // TODO: Write to localStorage
  }
}
