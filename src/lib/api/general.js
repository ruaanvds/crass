import axios from "axios";

export const getTodo = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos/1");
};
