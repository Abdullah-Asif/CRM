import {IRepository} from "../../../application/contracts/persistence/repository.interface";

export class MssqlRepository<T> implements IRepository<T> {
    getAll(): Promise<T[]> {
        return Promise.resolve([]);
    }

    getOne(id: number): Promise<T> {
        return Promise.resolve(undefined);
    }

    insert(): Promise<void> {
        return Promise.resolve(undefined);
    }

    remove(): Promise<void> {
        return Promise.resolve(undefined);
    }

    update(id: number, entity: Partial<T>): Promise<void> {
        return Promise.resolve(undefined);
    }

}