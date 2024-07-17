export interface IRooms{
    totalRooms?:number;
    availableRooms?:number;
    bookedRooms?:number;

}
export interface IRoomProperties{
roomNumber?:string;
roomType:string;
amenities:string,
price:number,
photos:String;
checkinTime: Date;
checkoutTime:Date;
rating:number;
}
