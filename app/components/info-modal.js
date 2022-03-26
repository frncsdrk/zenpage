import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class InfoModalComponent extends Component {
  @tracked open = false;

  get isHidden() {
    return this.args.hidden ? true : false;
  }

  get isModalOpen() {
    return this.open;
  }

  @action
  openModal() {
    this.open = true;
  }

  @action
  closeModal() {
    this.open = false;
  }
}
