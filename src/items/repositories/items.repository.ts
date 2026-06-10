export abstract class ItemsRepository {
  abstract findAll(): Promise<any[]>;
  abstract create(item: any): Promise<any>;
}