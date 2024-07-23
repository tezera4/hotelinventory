import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  {path:'',component:RoomsComponent , children:[
    {path:'add',component:AddRoomComponent},
    {path:':id',component:RoomBookingComponent},
    
  ]},  
  
  // {path:'room/add',component:AddRoomComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
