import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsController } from './bills/bills.controller';

@Module({
  imports: [],
  controllers: [AppController, BillsController],
  providers: [AppService],
})
export class AppModule {}
