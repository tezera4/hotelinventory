import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service2/config.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
  }

}
