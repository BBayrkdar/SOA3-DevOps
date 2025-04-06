import { Project } from './domain/models/Project';
import { Sprint } from './domain/models/Sprint';
import { BacklogItem } from './domain/models/BacklogItem';
import { Task } from './domain/models/Task';
import { StatusTransitionManager } from './services/StatusTransitionManager';
import { SprintService } from './services/SprintService';
import { ReportService } from './services/ReportService';
import { ReportVisitor, SimpleTextReportVisitor, DetailedTextReportVisitor } from './visitors/ReportVisitor';

const project = new Project('1', 'AI Dashboard', new Date(), ['Dev A', 'Dev B']);
const sprint = new Sprint('1', project.id, 'Sprint 1', new Date(), new Date());

const item = new BacklogItem('1', sprint.id, 'User Login', 'Implement login', 'Dev A');
item.addTask(new Task('t1', item.id, 'Design login form', 'UI/UX'));
item.addTask(new Task('t2', item.id, 'API for auth', 'Backend'));

console.log("Initial status:", item.status.name);
StatusTransitionManager.advanceStatus(item); // To In Progress
StatusTransitionManager.advanceStatus(item); // To Ready for Testing
StatusTransitionManager.advanceStatus(item); // To In Testing
StatusTransitionManager.advanceStatus(item); // To Done

SprintService.startSprint(sprint);
SprintService.finishSprint(sprint, [item]);

console.log(ReportService.generateBurndown([item]));

const simpleTextReportVisitor = new SimpleTextReportVisitor();
const detailedTextReportVisitor = new DetailedTextReportVisitor();

console.log(ReportService.generateItemsReport([item], simpleTextReportVisitor));
console.log(ReportService.generateItemsReport([item], detailedTextReportVisitor));
