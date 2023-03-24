import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];
  log(message: string) {
    console.log(message);
    this.messages.push(message);
  }
  showAllLogs() {
    console.log(this.messages);
  }
}
