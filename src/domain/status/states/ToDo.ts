import { ItemStatus } from '../ItemStatus'
export class ToDo extends ItemStatus { code = 'todo'; nextAllowed() { return ['doing'] } }
