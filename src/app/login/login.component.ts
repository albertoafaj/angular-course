import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  passwd = "";
  constructor(
    private auth: AuthService,
    private router: Router) { };
  login() {
    if (this.auth.login(this.email, this.passwd)) {
      this.router.navigate(["page-protect"]);
      return;
    }
    alert("Login inválido");
    this.email = "";
    this.passwd = "";
  };
}
