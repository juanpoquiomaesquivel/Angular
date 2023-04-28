import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html', // external template
  // template: '<div><p>This web uses cookies to provide better user experience.</p></div>', // inline
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
    This web uses cookies to provide better user experience.
    <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
  </div>`, // multiple lines
  // styleUrls: ['./notification.component.css'], // external css
  styles: [
    'notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}',
    'p{font-size: 14px;}',
    '.close {float: right; margin-top: -15px;}',
    '.fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear}'
  ], // inline
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
