import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SearchBarComponent extends Component {
  @tracked searchEngineUrl = this.args.searchEngineUrl;

  get isHidden() {
    return typeof this.args.hidden === 'undefined' || this.args.hidden
      ? true
      : false;
  }

  onKeypress(searchEngineUrl, event) {
    if (event.key === 'Enter') {
      window.location.href = `${searchEngineUrl}${event.target.value.replace(
        ' ',
        '+'
      )}`;
    }
  }
}
