import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children-component',
  templateUrl: './children-component.component.html',
  styleUrls: ['./children-component.component.css']
})
export class ChildrenComponentComponent {
  @Input() secondName = "";
  name = "";
  @Output() showName = new EventEmitter();
}
