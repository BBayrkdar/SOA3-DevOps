import { ItemStatus } from '../ItemStatus'
export class Doing extends ItemStatus { code = 'doing'; nextAllowed() { return ['ready_for_testing'] } }
