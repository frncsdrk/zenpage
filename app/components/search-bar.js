import Component from '@glimmer/component';

export default class SearchBarComponent extends Component {
  get searchEngineUrl() {
    return this.args.searchEngineUrl || 'https://duckduckgo.com/?q=';
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
