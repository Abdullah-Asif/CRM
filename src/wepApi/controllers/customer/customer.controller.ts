import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {Customer} from "../../../domain/entities/customer.entity";
import {CreateCustomerRequest} from "./requestModels/createCustomerRequest";
import {ICustomerService} from "../../../application/contracts/services/customer.service.interface";
import {faker} from '@faker-js/faker'
@Controller('customers')
export class CustomerController {
    constructor(private  readonly _customerService: ICustomerService) {
    }
    @Get()
    public async getAll(): Promise<Customer[]> {
        //mapper will use in this part. return customerDto
        return customers;
    }

    @Post()
    public async create(@Body() customer: CreateCustomerRequest): Promise<void> {
        // await this._customerService.insert()
    }
}







export function createRandomCustomer() : Customer {
    return {
        id: faker.number.int({min: 10, max: 100}),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        organization: faker.company.name(),
        country: faker.location.country()
    }
}

export const customers: Customer[] = faker.helpers.multiple(createRandomCustomer, {count: 100})