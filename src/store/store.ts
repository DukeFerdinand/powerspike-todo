import Vue from "vue";
import { StoreOptions, Action, ActionContext } from "vuex";
import RootState from "../types/RootState";
import Task from "../types/Task";

export const state: StoreOptions<RootState> = {
  state: {
    tasks: []
  },
  mutations: {
    populateTasks(state: RootState, tasks: Task[]): void {
      state.tasks = tasks;
    },
    addTask(state: RootState, task: Task): void {
      state.tasks.push(task);
    }
  },
  actions: {
    populateTasks(
      { commit }: ActionContext<RootState, {}>,
      tasks: Task[]
    ): void {
      commit("populateTasks", tasks);
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
