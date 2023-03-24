import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  name = "Alberto";
  birthday = "03/04/1984";
  urlImage = "/assets/profile-photo.png";

  showBirthday() {
    alert(`A data de nascimento é: ${this.birthday}`)
  };
}
