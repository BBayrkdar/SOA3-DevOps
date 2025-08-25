import { InMemoryBacklogItemRepository } from './infrastructure/adapters/repo/InMemoryBacklogItemRepository'
import { InMemorySprintRepository } from './infrastructure/adapters/repo/InMemorySprintRepository'
import { GithubActionsAdapter } from './infrastructure/adapters/pipeline/GithubActionsAdapter'
import { DomainEventBus } from './application/services/DomainEventBus'
import { ChangeStatus } from './application/usecases/ChangeStatus'
import { FinishSprint } from './application/usecases/FinishSprint'
import { BacklogItem } from './domain/entities/BacklogItem'
import { DefaultStatusFactory } from './domain/status/DefaultStatusFactory'
import { Task } from './domain/entities/Task'
import { Sprint } from './domain/entities/Sprint'
import { CsvVisitor } from './application/reporting/CsvVisitor'
import { GenerateReport } from './application/usecases/GenerateReport'

async function bootstrap(){
  const backlogRepo = new InMemoryBacklogItemRepository()
  const sprintRepo  = new InMemorySprintRepository()
  const pipeline    = new GithubActionsAdapter()
  const bus         = new DomainEventBus()

  // Handlers (Observer)
  bus.on('StatusChangedEvent', (e:any)=>console.log('EVENT:', e))

  // Data
  const statusFactory = new DefaultStatusFactory()
  const item = new BacklogItem('1','Demo Item', statusFactory.create('todo'))
  item.add(new Task('t1','Subtask 1', 3))
  item.add(new Task('t2','Subtask 2', 5))
  await backlogRepo.save(item)

  const sprint = new Sprint('s1','Sprint 1','RELEASE', new Date(), new Date())
  await sprintRepo.save(sprint)

  // Use cases
  const changeStatus = new ChangeStatus(backlogRepo, bus)
  await changeStatus.exec('1','doing')
  await changeStatus.exec('1','ready_for_testing')
  await changeStatus.exec('1','testing')
  await changeStatus.exec('1','tested')
  await changeStatus.exec('1','done')

  const finishSprint = new FinishSprint(sprintRepo, pipeline)
  const result = await finishSprint.exec('s1')
  console.log('Pipeline result:', result)

  // Report
  const gen = new GenerateReport(backlogRepo)
  const csv = await gen.exec(['1'], new CsvVisitor())
  console.log('\nCSV REPORT:\n', csv)
}
bootstrap()
