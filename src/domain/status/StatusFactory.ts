import { ItemStatus } from './ItemStatus'
export abstract class StatusFactory {
  abstract create(code: string): ItemStatus
}
