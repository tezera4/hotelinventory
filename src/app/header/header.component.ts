import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service2/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private config:ConfigService) { }
headerTitle='Header Title';
  ngOnInit(): void {
  }

}
