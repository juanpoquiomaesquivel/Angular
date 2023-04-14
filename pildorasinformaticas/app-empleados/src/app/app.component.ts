import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCCnk80iqYP6dk58RK4r1QtZwwz7-BcRoM',
      authDomain: 'mis-clientes-bbc88.firebaseapp.com',
    });
  }

  constructor(private loginService: LoginService) {
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }
}
