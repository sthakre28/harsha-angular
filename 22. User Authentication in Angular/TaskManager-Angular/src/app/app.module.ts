import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtinterceptorService } from './jwtinterceptor.service';
import { JwtUnAuthorizedInterceptorService } from './jwt-un-authorized-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : JwtinterceptorService,
      // in order to create multiple object for jwt interceptor service
      multi : true
    },
    {

      // first this will execute and then other
      provide : HTTP_INTERCEPTORS,
      useClass : JwtUnAuthorizedInterceptorService,
      // in order to create multiple object for jwt interceptor service
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
