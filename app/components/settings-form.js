import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsFormComponent extends Component {
  @service localStorageExtra;

  // TODO: Centralize search engine presets to use them app wide
  presets = {
    duckduckgo: 'https://duckduckgo.com?q=',
    ecosia: 'https://www.ecosia.org/search?q=',
  };
  settings = this.args.settings;
  @tracked hideSearchBar = this.settings.hideSearchBar;
  @tracked searchEnginePreset = this.settings.searchEnginePreset;
  @tracked configureSearch = this.settings.configureSearch;
  @tracked searchEngineUrl = this.settings.searchEngineUrl;
  @tracked hideTimeDisplay = this.settings.hideTimeDisplay;
  @tracked configureBackground = this.settings.configureBackground;
  @tracked backgroundUrl = this.settings.backgroundUrl;

  constructor() {
    super(...arguments);
    console.log('loaded settings:', this.settings);
  }

  @action
  getSearchEnginePreset(name) {
    return this.searchEnginePreset === name;
  }

  @action
  setSearchEnginePreset(name) {
    this.searchEnginePreset = name;
    if (name === 'custom') {
      this.configureSearch = true;
    } else {
      this.configureSearch = false;
      this.searchEngineUrl = this.presets[name];
    }
  }

  @action
  apply() {
    this.settings = {
      hideSearchBar: this.hideSearchBar,
      searchEnginePreset: this.searchEnginePreset,
      configureSearch: this.configureSearch,
      searchEngineUrl: this.searchEngineUrl,
      hideTimeDisplay: this.hideTimeDisplay,
      configureBackground: this.configureBackground,
      backgroundUrl: this.backgroundUrl,
    };
    console.log('settings:', this.settings);
    // TODO: Write to localStorage
    this.localStorageExtra.write('settings', this.settings, {
      stringify: true,
    });
  }
}
