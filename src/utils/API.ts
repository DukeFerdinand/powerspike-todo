import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { GetTasks } from "../types/ResponseTypes";
import { Task, NewTask } from "../types/Task";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/api"
};

const API: AxiosInstance = axios.create(axiosConfig);

// If we could specify an ID for the task, you'd pass it in here
export const retrieveTasks = async (): Promise<AxiosResponse<GetTasks>> => {
  const tasks = await API.get<GetTasks>("/");
  return tasks;
};

export const createTask = async (
  newTask: NewTask
): Promise<AxiosResponse<Task>> => {
  const task = await API.post("/new", { ...newTask });
  return task;
};

export const deleteTask = async (
  taskId: string
): Promise<AxiosResponse<Task>> => {
  return await API.delete(`/delete/${taskId}`);
};
