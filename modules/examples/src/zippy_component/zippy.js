import {Component, Template} from 'angular2/angular2';
import {EventEmitter} from 'angular2/src/core/annotations/di';

@Component({
  selector: 'zippy',
  bind: {
    'title': 'title'
  }
})
@Template({
  url: 'zippy.html'
})
export class Zippy {
  visible: boolean;
  title: string;
  openHandler:Function;
  closeHandler:Function;

  constructor(@EventEmitter('open') openHandler:Function, @EventEmitter('close') closeHandler:Function) {
    this.visible = true;
    this.openHandler = openHandler;
    this.closeHandler = closeHandler;
  }

  toggle() {
    this.visible = !this.visible;
    this.visible ? this.openHandler() : this.closeHandler();
  }
}
