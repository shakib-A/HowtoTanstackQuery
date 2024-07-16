import axios from "axios";
import { Todo } from "../types/todo";
import { Project } from "../types/project";
const BASE_URL = "http://localhost:8080";
const api = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
  const response = await api.get<Todo[]>("/todos");
  return response.data.map((todo: Todo) => todo.id);
};

export const getTodo = async (id: number) => {
    const response = await api.get<Todo>(`/todos/${id}`)
    return response.data
}

export const createTodo = async (data: Todo) => {
    await api.post('/todos', data)
}

export const updateTodo = async (data: Todo) => {
    await api.put(`/todos/${data.id}` , data)
}

export const deleteTodo = async (id: number) => {
    await api.delete(`/todos/${id}`)
}

export const getProjects = async (page = 1) => {
   const response = await api.get<Project[]>(`/projects?_page=${page}&_limits=3`)
   return response.data
}