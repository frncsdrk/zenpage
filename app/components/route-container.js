import Component from '@glimmer/component';
import documentDimensions from 'zenpage/utils/document-dimensions';

export default class RouteContainerComponent extends Component {
  settings = this.args.settings;

  get background() {
    const { height, width } = documentDimensions();

    if (this.settings.backgroundUrl && this.settings.configureBackground) {
      return `background: url(${this.settings.backgroundUrl});`;
    } else {
      return `background: url(https://source.unsplash.com/random/${width}x${height}?zen);`;
    }
  }
}
