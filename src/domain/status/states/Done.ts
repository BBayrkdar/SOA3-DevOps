import { ItemStatus } from '../ItemStatus'
export class Done extends ItemStatus { code = 'done'; nextAllowed() { return [] } }
