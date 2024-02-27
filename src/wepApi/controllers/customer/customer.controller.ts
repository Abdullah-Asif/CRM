import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {Customer} from "../../../domain/entities/customer.entity";
import {CreateCustomerRequest} from "./requestModels/createCustomerRequest";
import {ICustomerService} from "../../../application/contracts/services/customer.service.interface";

@Controller('customers')
export class CustomerController {
    constructor(private  readonly _customerService: ICustomerService) {
    }
    @Get()
    public async getAll(): Promise<Customer[]> {
        //mapper will use in this part. return customerDto
        return await this._customerService.getAllCustomer();
    }

    @Post()
    public async create(@Body() customer: CreateCustomerRequest): Promise<void> {
        // await this._customerService.insert()
    }
}
