import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan: string='Your one stop shop for everything.';
  source: string="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.U-M7Mk3OFmLvCg9yNW-ulQHaEK%26pid%3DApi&f=1&ipt=af1a5e430c2040b2aacb40a7da29f9c440d52f4bcc5f1d9c6037b5966297db02&ipo=images";

  getSlogan() {
    return 'This is a new slogan for this web application';
  }
}
