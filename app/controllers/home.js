import Controller from '@ember/controller';
import documentDimensions from 'zenpage/utils/document-dimensions';

export default class HomeController extends Controller {
  get backgroundImgUrl() {
    const { height, width } = documentDimensions();
    return `https://source.unsplash.com/random/${width}x${height}`;
  }
}
