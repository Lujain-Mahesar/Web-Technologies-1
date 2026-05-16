import type { Task } from "../types/task";
import TaskForm from "../components/Taskform";

type CreateTaskPageProps = {
  onCreateTask: (task: Task) => void;
  editingTask: Task | null;
};

function CreateTaskPage({ onCreateTask, editingTask }: CreateTaskPageProps) {
  return (
    <main className="dashboard-container">
      <div className="ui-label">
        <h2>{editingTask ? "Edit Task" : "Create New Task"}</h2>
      </div>
      <TaskForm onCreateTask={onCreateTask} editingTask={editingTask} />
    </main>
  );
}

export default CreateTaskPage;