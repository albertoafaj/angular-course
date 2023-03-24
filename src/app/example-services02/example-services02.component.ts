import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-example-services02',
  templateUrl: './example-services02.component.html',
  styleUrls: ['./example-services02.component.css']
})
export class ExampleServices02Component {
  product = "";
  constructor(public logger: LoggerService) {

  }
  addProduct() {
    this.logger.log(`O produto ${this.product} foi adicionado`)
  }
}
