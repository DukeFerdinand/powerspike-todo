import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { GetTasks } from "../types/ResponseTypes";
import Task from "../types/Task";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/api"
};

const API: AxiosInstance = axios.create(axiosConfig);

// If we could specify an ID for the task, you'd pass it in here
export const retrieveTasks = async (): Promise<AxiosResponse<GetTasks>> => {
  const tasks = await API.get<GetTasks>("/");
  return tasks;
};
