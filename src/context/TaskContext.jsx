import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(newTask) {
    setTask([
      ...task,
      {
        title: newTask.title,
        id: task.length + 1,
        description: newTask.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
