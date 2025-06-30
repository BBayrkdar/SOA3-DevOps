import { SprintProcessTemplate } from './SprintProcessTemplate';
export class ReleaseSprintProcess extends SprintProcessTemplate {
  protected doWork() {
    console.log("Working on release and pipeline");
  }
  protected hook() {
    console.log("Notifying QA about release");
  }
}
