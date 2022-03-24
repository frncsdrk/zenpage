import Component from '@glimmer/component';

export default class SearchBarComponent extends Component {
  get isHidden() {
    return typeof this.args.hidden === 'undefined' || this.args.hidden
      ? true
      : false;
  }

  get searchEngineUrl() {
    if (this.args.searchEngineUrl && this.args.configureSearch) {
      return this.args.searchEngineUrl;
    } else {
      return 'https://duckduckgo.com/?q=';
    }
  }

  onKeypress(event) {
    // console.log('event:', event);
    if (event.key === 'Enter') {
      window.location.href = `${event.target.getAttribute(
        'data-search-engine-url'
      )}${event.target.value.replace(' ', '+')}`;
    }
  }
}
