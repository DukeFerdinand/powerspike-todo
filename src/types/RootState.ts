import { Task } from "./Task";

export default interface RootState {
  tasks: Task[];
  editingTask: EditingTask;
}

export type EditingTask = Task | {};
