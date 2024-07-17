export interface IRooms{
    totalRooms?:number;
    availableRooms?:number;
    bookedRooms?:number;

}
export interface IRoomProperties{
roomNumber:number;
roomType:string;
amenties:string,
price:number,
photo:String;
checkInTime: Date;
checkOutTIme:Date;
}
