import Component from '@glimmer/component';

export default class SearchBarComponent extends Component {
  onKeypress(event) {
    console.log('event:', event);
    if (event.key === 'Enter') {
      window.location.href = `https://duckduckgo.com/?q=${event.target.value.replace(
        ' ',
        '+'
      )}`;
    }
  }
}
