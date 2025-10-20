export class CreateBillDto {
    amount: number;
    description: string;
    date: Date;
    status: string; // to be changed to enum type
    buyerId: string; // reference to the buyer
    items: string[];
    currency: string;
}