import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { Request2Interceptor } from './request2.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { RoomModule } from './rooms/room.module';
import{urlToken} from './service2/StringToken';
function initFactory(initService: InitService) {

  return ()=> initService.init();
}
@NgModule({
  declarations: [
    AppComponent,   
    
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,    
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    //The following module is xommented because
    // since e=we have decided the room module to load lazily
    // so we have to Isolet it from other modules

    // RoomModule, //the future module must come before th app route
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    

  ],
  providers: [
    //the following two lines of code register or provide the interecpt concept
    //if you have multiple interceptor then it will be excuted in sequence
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Request2Interceptor,
      multi: true

    },
    {
      provide:APP_INITIALIZER,
      useFactory:initFactory,
      deps:[InitService],
      multi:true
    },
    {
      provide:urlToken,
      useValue:{URL:"tezera.com"}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
