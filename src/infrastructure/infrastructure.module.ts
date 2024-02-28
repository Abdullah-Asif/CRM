import {Module} from "@nestjs/common";
import {CustomerRepository} from "./persistence/repositories/customer.repository";
import {ICustomerRepository} from "../application/contracts/persistence/customer.repository.inteface";
import {ICustomerService} from "../application/contracts/services/customer.service.interface";
import {CustomerService} from "../application/services/customer.service";
@Module({
    providers:[
        {
            provide: ICustomerService,
            useClass: CustomerService
        },
        {
            provide: ICustomerRepository,
            useClass: CustomerRepository
        }
    ],
    exports:[ICustomerService]
})
export class InfrastructureModule {}