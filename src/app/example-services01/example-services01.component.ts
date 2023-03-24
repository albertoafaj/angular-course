import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-example-services01',
  templateUrl: './example-services01.component.html',
  styleUrls: ['./example-services01.component.css']
})
export class ExampleServices01Component {
  name = "";
  constructor(private logger: LoggerService) {

  }
  addName() {
    this.logger.log(`O nome ${this.name} foi adicionado`);
  }
}
