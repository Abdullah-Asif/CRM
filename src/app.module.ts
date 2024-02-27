import { Module } from '@nestjs/common';
import {CustomerController} from "./wepApi/controllers/customer/customer.controller";
import {InfrastructureModule} from "./infrastructure/infrastructure.module";
@Module({
  imports: [InfrastructureModule],
  controllers: [CustomerController],
  providers: []
})
export class AppModule {}
