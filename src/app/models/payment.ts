export interface Payment{
    id:number;
    customerId:number;
    fullName:string;
    cvv:number;
    expiryDate:string;
    cardNumber:string;
}