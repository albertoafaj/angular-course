import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  secondName = "da silva"
  showFullName(fullName: any) {
    alert(`O nome completo é: ${fullName}`);
  }
}
