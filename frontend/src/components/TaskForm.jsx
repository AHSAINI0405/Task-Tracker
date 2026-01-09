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
        <select
          className="flex-1 border p-2 rounded"
          value={form.priority}
          onChange={(e) =>
            setForm({ ...form, priority: e.target.value })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

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
