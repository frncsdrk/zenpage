import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsFormComponent extends Component {
  @service localStorageExtra;

  settings = this.args.settings;
  @tracked configureSearch = this.settings.configureSearch || false;
  @tracked searchEngineUrl = this.settings.searchEngineUrl || '';

  @action
  apply() {
    this.settings = {
      configureSearch: this.configureSearch,
      searchEngineUrl: this.searchEngineUrl,
    };
    console.log('settings:', this.settings);
    // TODO: Write to localStorage
    this.localStorageExtra.write('settings', this.settings, {
      stringify: true,
    });
  }
}
