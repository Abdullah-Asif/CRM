export abstract class IRepository<T> {
    abstract getAll(): Promise<T[]>
    abstract insert(entity: T): Promise<void>
    abstract getOne(id: number): Promise<T>
    abstract update(id: number, entity: Partial<T>): Promise<void>
    abstract remove(id: number): Promise<void>
}