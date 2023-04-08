import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService) {
    
  }

  login(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);
  }
}

// https://www.youtube.com/watch?v=z0Owsoi49Yg&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=38
// https://www.youtube.com/watch?v=v6UNNwCVhpI&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=39
// https://www.youtube.com/watch?v=wGv3mjvLtdY&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=40
// https://www.youtube.com/watch?v=dCCmpe-MOjw&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=41
// https://www.youtube.com/watch?v=h4e8TvKdATc&list=PLU8oAlHdN5BnNAe8zXnuBNzKID39DUwcO&index=42