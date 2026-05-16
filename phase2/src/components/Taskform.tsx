import { useState, useEffect } from "react";
import type { Task, TaskStatus, TaskPriority } from "../types/task";

type TaskFormProps = {
  onCreateTask: (task: Task) => void;
  editingTask: Task | null;
};

function TaskForm({ onCreateTask, editingTask }: TaskFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [priority, setPriority] = useState<TaskPriority>("Low");
  const [dueDate, setDueDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate ?? "");
    } else {
      setTitle("");
      setDescription("");
      setStatus("Todo");
      setPriority("Low");
      setDueDate("");
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Task title is required.");
      return;
    }
    setError("");
    const task: Task = {
      id: 0,
      title,
      description,
      status,
      priority,
      dueDate,
      createdAt: editingTask ? editingTask.createdAt : new Date().toISOString().split("T")[0],
    };
    onCreateTask(task);
    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Low");
    setDueDate("");
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Low");
    setDueDate("");
    setError("");
  };

  return (
    <section className="card">
      <h3>{editingTask ? "Update Task" : "Create Task"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <span className="error">{error}</span>}
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="field">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="field">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="form-btns">
          <button type="button" className="btn-secondary" onClick={handleClear}>
            Clear
          </button>
          <button type="submit" className="btn-primary">
            {editingTask ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;