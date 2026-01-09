import axios from "axios";
import { toast } from "react-toastify";

const API = process.env.REACT_APP_API_URL;

const TaskList = ({ tasks, fetchTasks }) => {
  const completeTask = async (id) => {
    await axios.put(`${API}/tasks/${id}`, { status: "Completed" });
    toast.success("Task Completed");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/${id}`);
    toast.error("Task Deleted");
    fetchTasks();
  };

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="border p-3 rounded flex justify-between"
        >
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-sm">
              {task.priority} | {task.status}
            </p>
          </div>

          <div className="flex gap-2">
            {task.status !== "Completed" && (
              <button
                onClick={() => completeTask(task._id)}
                className="bg-green-600 text-white px-2 rounded"
              >
                Done
              </button>
            )}
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-600 text-white px-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
