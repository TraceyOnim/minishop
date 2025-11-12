import { Injectable } from '@nestjs/common';
import { Bill } from '../interface/bill.interface';

@Injectable()
export class BillsService {
  private readonly bills: Bill[] = [];

  // constructor(private readonly bills: Bill[]=[]){}

  createBill(bill: Bill) {
    this.bills.push(bill);
  }

  findAll(): Bill[] {
    return this.bills;
  }
}
