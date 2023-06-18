import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title, description);
    createTask({
      title,
      description,
    });
  };

  return (
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setdescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
