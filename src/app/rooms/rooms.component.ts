import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IRoomProperties, IRooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './rooms.service';
import { catchError, observable, Observable, of, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

//is used most of the time to inject dependency
  constructor(private roomService:RoomsService) { }
  subscription!:Subscription;
  title='Room Lists';
  stream= new Observable(x=>{
    x.next("user1");
    x.next("user2");
    x.next("user3");
    x.complete;
  });
  //please not that if the child has synchronous txn do not use static true
  //because setting static true enables you to call child in side onInit method
  //that means at a time of initialization.
  // but if do not make it true and if you try to call inside the i=onInit method
  //  you will face an error. so the solution is implement AfterViewInit interface
  // and call the child component. at this stage the calling and the called are 
  //initialized also
  // @ViewChild(HeaderComponent,{static:true}) headerComponent!:HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent1!:HeaderComponent;
  // @ViewChildren(HeaderComponent) headComponent!:QueryList<HeaderComponent>;
  // @ViewChildren(HeaderComponent) headComponent2!:QueryList<HeaderComponent>;
  // @ViewChildren(HeaderComponent) headComponent3!:QueryList<HeaderComponent>;
  
//the ngOnInit is used by people to initialize objects
//use pipes to handel exceptions
roomd$=this.roomService.trymybest$.pipe(
  catchError((err)=>{
    console.log("Tezera is working harddddddd======"+err.message);
    console.log(err.message);
    return of([]);
  })

);
  ngOnInit(): void {
    // console.log(this.headerComponent.headerTitle);
    this.getPhotos();
    this.subscription = this.roomService.trymybest$.subscribe(
      x=>{
        this.roomList=x;
      }
    );
    
    this.subscription=this.stream.subscribe({
      next:(nexts)=>console.log(nexts),
      complete:()=>console.log("completerd"),
      error:(err)=>console.log(err)
     
    });
    this.stream.subscribe(res=>{
      
      console.log(res);
     });
     
  }
  ngAfterViewInit(): void{
    //This event hook is important let say to call method etc from the child
    // console.log(this.headerComponent.headerTitle);
    this.headerComponent1.headerTitle="The first title";
    // this.headComponent2.first.headerTitle="Header title from parent  fdffdf";
    // this.headComponent.last.headerTitle="Header title from parent 4 ";
    // this.headComponent3;

   
  }
  ngAfterViewChecked(): void{
    // this.headerComponent.headerTitle="Header title from parent ";
  }
  hotelName = "Radison Blue"
  numberOfRooms = 20;
  rooms?: IRooms = { availableRooms: 15, bookedRooms: 5, totalRooms: 20 };
  roomList: IRoomProperties[] =[]; 
  selectedRoom!:IRoomProperties;
  selectRoom(y:IRoomProperties)
  {
    this.selectedRoom=y;
console.log(y)
  }
  AddRoom(){
   let newRoom:IRoomProperties={
      // roomNumber: "4",
        amenities: "two bed, kichen three",
        roomType: "suite",
        checkinTime: new Date("12-july-2024"),
        checkoutTime: new Date("12-july-2024"),
        photos: "sdsd",
        price: 1200,
        rating:4.6
    };
    // this.roomList.push(newRoom);
    // this.roomList=[...this.roomList,newRoom];
    this.roomService.createRoom(newRoom).subscribe(x=>{
      console.log("Tezera is working hard 2");
      console.log(x);
      this.roomList=x;
    })
  }
 
  Toggle(){
    this.title="Rooms List".toUpperCase();
  }
  editRoom(){
    let newRoom:IRoomProperties={
      roomNumber: "3",
        amenities: "two bed, kichen updated 4",
        roomType: "suite",
        checkinTime: new Date("12-july-2024"),
        checkoutTime: new Date("12-july-2024"),
        photos: "sdsd",
        price: 1200,
        rating:4.6
    };
    this.roomService.editRoom(newRoom).subscribe(res=>{
      this.roomList=res;
      console.log(res);
    });
   
  }

  deleteRoom(){
    let newRoom:IRoomProperties={
      roomNumber: "3",
        amenities: "two bed, kichen updated 4",
        roomType: "suite",
        checkinTime: new Date("12-july-2024"),
        checkoutTime: new Date("12-july-2024"),
        photos: "sdsd",
        price: 1200,
        rating:4.6
    };
    this.roomService.deleteRoom("3").subscribe(res=>{
      this.roomList=res;
    });
  }
totalByteRead=0;
  getPhotos(){
    this.roomService.getPhoto().subscribe(event=>{
      switch(event.type){
        case HttpEventType.Sent:{
          console.log("Sent");
          break;
        }
        
        case HttpEventType.ResponseHeader:
          {
            console.log("ResponseHeader");
            break;
          }
         
          case HttpEventType.DownloadProgress:
            {
              console.log("DownloadProgress==");
              this.totalByteRead=this.totalByteRead+event.loaded;
              break;
            }
            
          case HttpEventType.Response:
            {
              console.log("Response event body=="+event.body)
              break;
            }

      }
      console.log(event);
    });
  }
//This is very important for performance to from memory
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe; 
    }
       
  }
  


}
