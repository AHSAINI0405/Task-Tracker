import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = process.env.REACT_APP_API_URL;


const TaskForm = ({ fetchTasks }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const isValid = form.title && form.dueDate;

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/tasks`, form);
      toast.success("Task Added");
      setForm({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
      });
      fetchTasks();
    } catch (error) {
      toast.error("Failed to add task");
      console.error(error);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3 mb-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="Task Title *"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <div className="flex gap-2">
  {["Low", "Medium", "High"].map((level) => (
    <button
      key={level}
      className={`flex-1 py-2 rounded transition-colors ${
        form.priority === level
          ? level === "Low"
            ? "bg-green-500 text-white"
            : level === "Medium"
            ? "bg-yellow-400 text-white"
            : "bg-red-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={() => setForm({ ...form, priority: level })}
    >
      {level}
    </button>
  ))}


        <input
          type="date"
          className="flex-1 border p-2 rounded"
          value={form.dueDate}
          onChange={(e) =>
            setForm({ ...form, dueDate: e.target.value })
          }
        />
      </div>

      <button
        disabled={!isValid}
        className={`w-full p-2 text-white rounded ${
          isValid ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
