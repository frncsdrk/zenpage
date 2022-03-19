import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TimeDisplayComponent extends Component {
  @tracked now = new Date();

  tick() {
    this.now = new Date();
    setTimeout(() => {
      this.tick();
    }, 1000);
  }

  constructor() {
    super(...arguments);
    this.tick();
  }

  prependZero(value) {
    return value < 10 ? `0${value}` : value.toString();
  }

  get currentTime() {
    return `${this.prependZero(this.now.getHours())}:${this.prependZero(
      this.now.getMinutes()
    )}`;
  }
}
