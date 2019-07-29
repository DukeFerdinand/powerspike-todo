import Vue from "vue";
import { StoreOptions, Action, ActionContext } from "vuex";

import {
  createTask,
  retrieveTasks,
  deleteTask as apiDeleteTasks
} from "../utils/API";

import RootState from "../types/RootState";
import { Task, NewTask } from "../types/Task";

export const state: StoreOptions<RootState> = {
  state: {
    tasks: []
  },
  mutations: {
    populateTasks(state: RootState, tasks: Task[]): void {
      state.tasks = tasks;
    },
    removeTask(state: RootState, taskId: string): void {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    populateTasks(
      { commit }: ActionContext<RootState, {}>,
      tasks: Task[]
    ): void {
      commit("populateTasks", tasks);
    },
    async createTask({ commit }: ActionContext<RootState, {}>, task: NewTask) {
      const insertedTask = await createTask(task);
      // This extra step is only required because
      // we don't return the new task object upon inserting :( No way to get the ID
      const result = await retrieveTasks();
      commit("populateTasks", result.data.tasks);
    },
    async deleteTask({ commit }: ActionContext<RootState, {}>, taskId: string) {
      await apiDeleteTasks(taskId);
      commit("removeTask", taskId);
    }
  },
  getters: {
    allTasks(state: RootState): Task[] {
      return state.tasks;
    },
    getTaskById: (state: RootState) => (id: String): Task | undefined =>
      state.tasks.find(task => task.id === id)
  }
};
