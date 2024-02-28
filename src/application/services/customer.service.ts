import {ICustomerService} from "../contracts/services/customer.service.interface";
import {Customer} from "../../domain/entities/customer.entity";
import {ICustomerRepository} from "../contracts/persistence/customer.repository.inteface";
import {customers} from "../demoConstant";

export class CustomerService implements ICustomerService {
    constructor(private  readonly _customerRepository: ICustomerRepository) {
    }
    public async getAllCustomer(): Promise<Customer[]> {
        // return await this._customerRepository.getAll();
        return customers;
    }

    public async getCustomer(id: number): Promise<Customer> {
        return await this._customerRepository.getOne(id);
    }

    public async updateCustomer(id: number, customer: Partial<Customer>): Promise<void> {
        const customerEntity = await this._customerRepository.getOne(id);
        if (customerEntity == null) {
            throw new Error("Customer not found");
        }

        //do proper mapping and then pass it

        await this._customerRepository.update(id, customer); //pass mapped updated entity
    }
    public  async createCustomer(customer: Customer): Promise<void> {
        await this._customerRepository.insert(customer);
    }

    public async deleteCustomer(id: number): Promise<void> {
        await this._customerRepository.remove(id);
    }
}