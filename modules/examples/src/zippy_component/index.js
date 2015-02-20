import {bootstrap, Component, Template, For} from 'angular2/angular2';
import {ListWrapper} from 'angular2/src/facade/collection';
import {reflector} from 'angular2/src/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/reflection/reflection_capabilities';
import {Zippy} from './zippy';

@Component({
  selector: 'zippy-app'
})
@Template({
  inline: `<zippy (open)="pushLog('open')" (close)="pushLog('close')" title="Details">
            This is some content.
           </zippy>
           <ul>
            <li *for="var log of logs">{{log}}</li>
           </ul>`,
  directives: [Zippy, For]
})
class ZippyApp {

  logs: List<string>;

  constructor() {
    this.logs = [];
  }

  pushLog(log:string) {
    ListWrapper.push(this.logs, log);
  }
}

export function main() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  bootstrap(ZippyApp);
}
