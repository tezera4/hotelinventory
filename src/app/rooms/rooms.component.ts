import { Component, OnInit } from '@angular/core';
import { IRoomProperties, IRooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  hotelName = "Radison Blue"
  numberOfRooms = 20;
  rooms?: IRooms = { availableRooms: 15, bookedRooms: 5, totalRooms: 20 };
  roomList: IRoomProperties[] = [
    {
      roomNumber: 1,
      amenties: "two bed, kichen",
      roomType: "suite",
      checkInTime: new Date("12-july-2024"),
      checkOutTIme: new Date("12-july-2024"),
      photo: "sdsd",
      price: 1200
    }, {
      roomNumber: 2,
      amenties: "two bed, kichen",
      roomType: "suite",
      checkInTime: new Date("12-july-2024"),
      checkOutTIme: new Date("12-july-2024"),
      photo: "sdsd",
      price: 1200
    },
    {
      roomNumber: 3,
      amenties: "two bed, kichen",
      roomType: "suite",
      checkInTime: new Date("12-july-2024"),
      checkOutTIme: new Date("12-july-2024"),
      photo: "sdsd",
      price: 1200
    }, {
      roomNumber: 4,
      amenties: "two bed, kichen",
      roomType: "suite",
      checkInTime: new Date("12-july-2024"),
      checkOutTIme: new Date("12-july-2024"),
      photo: "sdsd",
      price: 1200
    }];



}
