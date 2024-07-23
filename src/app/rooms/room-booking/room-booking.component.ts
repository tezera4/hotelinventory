import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  //the following line of code is very important because it is observable and
  //using async pipe you can unrape which helps to authomaticaly close the subscription
  //to avoid memory leak or consumption.

id$=this.route.paramMap.pipe(
  map((param)=>param.get('id'))
);
id:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
this.id=param.get;
    }
  )
  }

}
