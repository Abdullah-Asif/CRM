import { MssqlRepository} from "./mssqlRepository";
import {Customer} from "../../../domain/entities/customer.entity";

export class CustomerRepository extends MssqlRepository<Customer> {

}