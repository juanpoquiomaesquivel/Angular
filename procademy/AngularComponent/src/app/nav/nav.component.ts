import { Component } from '@angular/core';

@Component({
  // selector: 'app-nav', // HTML tag
  // selector: '[app-nav]', // HTML attribute
  selector: '.app-nav', // CSS class
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sitename: string = 'eShopping';
}
