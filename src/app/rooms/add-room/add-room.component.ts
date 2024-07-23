import { Component, OnInit } from '@angular/core';
import { IRoomProperties } from '../rooms';
import { RoomsService } from '../rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  
  constructor(private roomService:RoomsService) { }
  successMessage:string='';
  //the following is used for as a model
  room: IRoomProperties = {
    amenities: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: "",
    price: 0,
    rating: 0,
    roomType: ""
  }

  ngOnInit(): void {
  }
  addRoom(roomform:NgForm){
    this.roomService.createRoom(this.room).subscribe(x=>{
      // console.log("Tezera is working hard==>>>>>>");
      // console.log(x);
      this.successMessage="Room Added successfully",
      roomform.resetForm({
        amenities: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: "",
    price: 0,
    rating: 0,
    roomType: ""
      })

    });
  }

}
