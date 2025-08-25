import { ItemStatus } from '../ItemStatus'
export class ReadyForTesting extends ItemStatus {
  code = 'ready_for_testing'
  nextAllowed() { return ['testing', 'todo'] } // terug naar todo bij afkeuring
}
