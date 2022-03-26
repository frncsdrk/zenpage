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
  @tracked hideTimeDisplay = this.settings.hideTimeDisplay;
  @tracked hideInfoButton = this.settings.hideInfoButton;
  @tracked searchEnginePreset = this.settings.searchEnginePreset;
  @tracked configureSearch = this.settings.configureSearch;
  @tracked searchEngineUrl = this.settings.searchEngineUrl;
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
  reset() {
    this.settings = {
      hideSearchBar: true,
      hideTimeDisplay: true,
      searchEnginePreset: 'duckduckgo',
      searchEngineUrl: 'https://duckduckgo.com?q=',
    };
    this.localStorageExtra.write('settings', this.settings, {
      stringify: true,
    });
  }

  @action
  apply() {
    this.settings = {
      hideSearchBar: this.hideSearchBar,
      hideTimeDisplay: this.hideTimeDisplay,
      hideInfoButton: this.hideInfoButton,
      searchEnginePreset: this.searchEnginePreset,
      configureSearch: this.configureSearch,
      searchEngineUrl: this.searchEngineUrl,
      configureBackground: this.configureBackground,
      backgroundUrl: this.backgroundUrl,
    };
    console.log('settings:', this.settings);
    this.localStorageExtra.write('settings', this.settings, {
      stringify: true,
    });
  }
}
