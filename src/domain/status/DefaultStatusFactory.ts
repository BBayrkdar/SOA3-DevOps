import { StatusFactory } from './StatusFactory'
import { ItemStatus } from './ItemStatus'
import { ToDo } from './states/ToDo'
import { Doing } from './states/Doing'
import { ReadyForTesting } from './states/ReadyForTesting'
import { Testing } from './states/Testing'
import { Tested } from './states/Tested'
import { Done } from './states/Done'

export class DefaultStatusFactory extends StatusFactory {
  create(code: string): ItemStatus {
    const map: Record<string, () => ItemStatus> = {
      todo: () => new ToDo(),
      doing: () => new Doing(),
      ready_for_testing: () => new ReadyForTesting(),
      testing: () => new Testing(),
      tested: () => new Tested(),
      done: () => new Done()
    }
    const ctor = map[code]
    if (!ctor) throw new Error(`Unknown status: ${code}`)
    return ctor()
  }
}
