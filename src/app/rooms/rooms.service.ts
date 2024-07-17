import { Injectable } from '@angular/core';
import { IRoomProperties } from './rooms';
import {HttpClient, HttpRequest} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  trymybest$=this.httpClient.get<IRoomProperties[]>('/api/roomds');

  constructor(private httpClient:HttpClient) { }
  // roomList:IRoomProperties[]=[
  //   {
  //     roomNumber: "1",
  //     amenties: "two bed, kichen",
  //     roomType: "suite",
  //     checkInTime: new Date("12-july-2024"),
  //     checkOutTIme: new Date("12-july-2024"),
  //     photo: "sdsd",
  //     price: 1200,
  //     rate:4.234
    
  //   }, {
  //     roomNumber: "2",
  //     amenties: "two bed, kichen",
  //     roomType: "suite",
  //     checkInTime: new Date("12-july-2024"),
  //     checkOutTIme: new Date("12-july-2024"),
  //     photo: "sdsd",
  //     price: 1200,
  //     rate:4.5
  //   },
  //   {
  //     roomNumber: "3",
  //     amenties: "two bed, kichen",
  //     roomType: "suite",
  //     checkInTime: new Date("12-july-2024"),
  //     checkOutTIme: new Date("12-july-2024"),
  //     photo: "sdsd",
  //     price: 1200,
  //     rate:3.66778
  //   }, {
  //     roomNumber: "4",
  //     amenties: "two bed, kichen",
  //     roomType: "suite",
  //     checkInTime: new Date("12-july-2024"),
  //     checkOutTIme: new Date("12-july-2024"),
  //     photo: "sdsd",
  //     price: 1200,
  //     rate:4.6
  //   }];
    

  getRooms(){
    return this.httpClient.get<IRoomProperties[]>('/api/rooms');
  }
  createRoom(room:IRoomProperties){
    return this.httpClient.post<IRoomProperties[]>("/api/rooms",room);
  }
  // deleteRoom(room:IRoomProperties){
  //   this.httpClient.delete("",hh);
  // }
  editRoom(room:IRoomProperties){
     return this.httpClient.put<IRoomProperties[]>(`/api/rooms/${room.roomNumber}`,room);
  }
  deleteRoom(id:string){
    return this.httpClient.delete<IRoomProperties[]>(`/api/rooms/${id}`);
 }
 getPhoto(){
  const httprequest=new HttpRequest('GET',
    "https://jsonplaceholder.typicode.com/photos",
    {
      reportProgress:true
    }
  
  );
  return this.httpClient.request(httprequest);
 }
}
