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
      console.log(state);
      state.tasks = tasks;
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
    }
  }
};
