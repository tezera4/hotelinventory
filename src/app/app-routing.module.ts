import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  //the angular knows the following and loads the room.module as lazy loding
  //at run time when the rooms is requested then the code in the rooms
  //module will be downloaded
 {path:'room',loadChildren:()=>import('./rooms/room.module').then(mod=>mod.RoomModule)},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
