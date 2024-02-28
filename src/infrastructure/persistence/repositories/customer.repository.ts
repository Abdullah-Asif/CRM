import { MssqlRepository} from "./mssql.repository";
import {Customer} from "../../../domain/entities/customer.entity";

export class CustomerRepository extends MssqlRepository<Customer> {

}