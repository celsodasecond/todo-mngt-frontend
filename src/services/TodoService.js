import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/todos";

export const getAllTodos = () => {
	return axios.get(REST_API_URL);
};

export const saveTodo = (todo) => {
	return axios.post((`${REST_API_URL}/add`), todo)
}