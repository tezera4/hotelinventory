import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { urlToken } from '../service2/StringToken';


@NgModule({
  declarations: [ RoomListComponent,RoomsComponent,RoomBookingComponent,
    AddRoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    HeaderModule,
    FormsModule
    
    
  ],
  providers:[
    {
      provide:urlToken,
      useValue:{URL:"rooms.com"}
    }
  ]
})
export class RoomModule { }
