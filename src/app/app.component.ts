import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
//  AfterViewInit
 {
  constructor(private initService:InitService){
    console.log("tezeraaaaaaaaaa======================");

    console.log(initService.config);
   
   

  }
  ngOnInit(): void {
    // this.elementRef.nativeElement="dfdfdf";
    console.log(this.elementRef.nativeElement);
  }
  title = 'hotelinventory';
  role="Users";
  // The followingthree line of code user to ref dynamic template fro examle component
  @ViewChild('teze',{read:ViewContainerRef}) viewContainerRef!:ViewContainerRef;
  ngAfterViewInit():void{
    // const componentRef=this.viewContainerRef.createComponent(RoomsComponent);
    //we can also access the template properties and morfiy
    // componentRef.instance.hotelName="Sheraton Addis"
  }
//note that if the static is false then it would not load the reference
  @ViewChild('ele',{static:true}) elementRef!:ElementRef;

}
