import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsController } from './bills/bills.controller';
import { BillsService } from './bills/services/bills.services';

@Module({
  imports: [],
  controllers: [AppController, BillsController],
  providers: [AppService, BillsService],
})
export class AppModule {}
