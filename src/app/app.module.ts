import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { Request2Interceptor } from './request2.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [
    //the following two lines of code register or provide the interecpt concept
    //if you have multiple interceptor then it will be excuted in sequence
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true

    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:Request2Interceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
