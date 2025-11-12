import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { ListAllEntities } from './dto/list-all-entitities';
import { Bill } from './interface/bill.interface';
import { BillsService } from './services/bills.services';

@Controller('bills')
export class BillsController {

  constructor(private billsService: BillsService){}

  @Post()
  async createBill(@Body() createBillDto: CreateBillDto) {
    this.billsService.createBill(createBillDto);
  }

  @Get()
  findAllBills(@Query() query: ListAllEntities) {
    return this.billsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'find one bill';
  }

  // @Put(':id')
  // updateBill(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
  //   return 'update bill';
  // }

  @Delete(':id')
  deleteBill(@Param('id') id: string) {
    return 'delete bill';
  }
}
