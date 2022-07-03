import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LoginViewMode } from './login-view-mode';
import { ProjectsService } from './projects.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserName : any = [];

  constructor(private http : HttpClient, private url : ProjectsService) { }

  loginUrl = this.url.urlPrefix ;

  public login(LoginViewModel: LoginViewMode){
    return this.http.post<any>(this.loginUrl + '/authenticate', LoginViewModel, {responseType: 'json'}).pipe(map(user =>
      {
        if (user)
        {
          this.currentUserName = user.UserName;
          console.log(this.currentUserName);
        }
        return user;
      }
    ))
  }

  public logOut(){
    this.currentUserName = null;
  }
}
