import Controller from '@ember/controller';
import documentDimensions from 'zenpage/utils/document-dimensions';

export default class HomeController extends Controller {
  get background() {
    const { height, width } = documentDimensions();
    return `background: url(https://source.unsplash.com/random/${width}x${height});`;
  }
}
