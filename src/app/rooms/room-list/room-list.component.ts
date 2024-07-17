import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IRoomProperties } from '../rooms';
import { RoomsService } from '../rooms.service';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnChanges,DoCheck {

  constructor( ) {
   console.log("constructor====================");
   }
  @Input() title:string='';

  ngOnInit(): void {
    console.log("ngOnInit===============");
  }
  ngOnChanges(changes: SimpleChanges):void{
    console.log("ngOnChanges====================");
console.log(changes);
if(changes['title'])
this.title=changes['title'].currentValue;
  }
  ngDoCheck(): void{
    console.log("ngDoCheck===============");
  }
 @Input() rooms:IRoomProperties[] | null=[];
 
 @Output() selectedRoom=new EventEmitter<IRoomProperties>();
 selectedRoomFun(x:IRoomProperties){
  this.selectedRoom.emit(x);
 }


}
