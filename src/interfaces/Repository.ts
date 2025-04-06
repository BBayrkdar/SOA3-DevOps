// Repository Pattern
export interface Repository<T> {
    getById(id: string): T | undefined;
    getAll(): T[];
    save(entity: T): void;
    delete(id: string): void;
}
  