import { Controller, Post, Get, Put, Delete Body, Query, Param } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { ListAllEntities } from './dto/list-all-entitities';

@Controller('bills')
export class BillsController {
  @Post()
  createBill(@Body() createBillDto: CreateBillDto) {
     return "create bill";
  } 

  @Get()
  findAllBills(@Query() query: ListAllEntities){
     return "find all bills";
  }

  @Get(':id')
  findOne(@Param('id') id: string){
     return "find one bill";
  }

  @Put(':id')
  updateBill(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto){
   return "update bill";
  }

  @Delete(':id')
  deleteBill(@Param('id') id: string) {
    return "delete bill";
  }
}
