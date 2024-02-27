import {Customer} from "../../../domain/entities/customer.entity";

export abstract class ICustomerService {
    abstract getAllCustomer(): Promise<Customer[]>
    abstract getCustomer(id: number): Promise<Customer>
    abstract createCustomer(customer: Customer): Promise<void>
    abstract updateCustomer(id: number, customer: Partial<Customer>): Promise<void>
    abstract deleteCustomer(id: number): Promise<void>
}