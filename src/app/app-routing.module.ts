import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'room',component:RoomsComponent},
  {path:'room/:id',component:RoomBookingComponent},
  {path:'',redirectTo:'/room',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
