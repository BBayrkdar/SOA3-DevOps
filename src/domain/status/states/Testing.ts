import { ItemStatus } from '../ItemStatus'
export class Testing extends ItemStatus { code = 'testing'; nextAllowed() { return ['tested'] } }
