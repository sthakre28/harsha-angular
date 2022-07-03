import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewMode } from '../login-view-mode';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginViewModel : LoginViewMode = new LoginViewMode();
  loginError!: string;

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
  }


  onLoginClick(event : any){
    this.loginService.login(this.loginViewModel).subscribe(
     (res)=>{
      this.router.navigateByUrl('/dashboard');
     },
     (error)=>{
      console.log(error);
      this.loginError = 'Incorrect username or password';
     } 
    )
  }
}
