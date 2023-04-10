
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {
    this.auth.updateLoginStatus(false);
   }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }

  forgotPassword() {
    if (this.email === '') {
      alert('Please enter your email');
      return;
    }
    alert("Instructions for forgotten password sent to your email address!")
    this.auth.forgotPassword(this.email);
  }

  passwordVisible = false;

  togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}

}
