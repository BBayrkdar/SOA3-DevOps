import { ItemStatus } from '../ItemStatus'
export class Tested extends ItemStatus { code = 'tested'; nextAllowed() { return ['done', 'ready_for_testing'] } }
