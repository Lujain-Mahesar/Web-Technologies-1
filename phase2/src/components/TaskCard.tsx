import { useNavigate } from "react-router-dom";
import type { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};

function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(task);
    navigate("/create");
  };

  const getStatusColor = (status: string) => {
    if (status === "Done") return { background: "#e6f9f0", color: "#1a8a4a" };
    if (status === "In Progress") return { background: "#fff4e0", color: "#b36b00" };
    return { background: "#f0f0f0", color: "#666" };
  };

  const getPriorityColor = (priority: string) => {
    if (priority === "High") return { background: "#ffe0e0", color: "#cc0000" };
    if (priority === "Medium") return { background: "#fff4e0", color: "#b36b00" };
    return { background: "#e0f0ff", color: "#0066cc" };
  };

  return (
    <div className="task-box">
      <div className="task-left">
        <h4>Task #{task.id}: {task.title}</h4>
        <p>{task.description}</p>
        <p style={{ fontStyle: "normal", marginTop: "6px" }}>
          Created: {task.createdAt}
        </p>
        <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
          <span className="badge" style={getStatusColor(task.status)}>
            {task.status}
          </span>
          <span className="badge" style={getPriorityColor(task.priority)}>
            {task.priority}
          </span>
        </div>
      </div>
      <div className="task-right">
        {task.dueDate && (
          <span className="due-date">due: {task.dueDate}</span>
        )}
        <button className="btn-edit" onClick={handleEdit}>Edit</button>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;