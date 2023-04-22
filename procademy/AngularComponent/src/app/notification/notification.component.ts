import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html', // external template
  // template: '<div><p>This web uses cookies to provide better user experience.</p></div>', // inline
  template: `<div class="alert alert-warning">
    <p>This web uses cookies to provide better user experience.</p>
  </div>`, // multiple lines
  // styleUrls: ['./notification.component.css'], // external css
  styles: ["notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}", "p{font-size: 14px;}"], // inline
})
export class NotificationComponent {}
