import {IRepository} from "./repository.interface";
import {Customer} from "../../../domain/entities/customer.entity";

export abstract class ICustomerRepository extends IRepository<Customer>{}