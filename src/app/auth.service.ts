import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

  constructor() { }
  isAuth(): boolean {
    return !!sessionStorage.getItem("access-token");
  }
  login(email: string, passwd: string): boolean {
    if (email === "admin@admin.com.br" && passwd === "123456") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }
  logout() {
    sessionStorage.clear();
  }
}
