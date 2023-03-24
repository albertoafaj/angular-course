import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protect-page',
  templateUrl: './protect-page.component.html',
  styleUrls: ['./protect-page.component.css']
})
export class ProtectPageComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  logout() {
    this.auth.logout();
    this.router.navigate(["login"])
  }
}
