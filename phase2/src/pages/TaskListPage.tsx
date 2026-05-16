import type { Task } from "../types/task";
import TaskCard from "../components/TaskCard";

type TaskListPageProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};

function TaskListPage({ tasks, onDelete, onEdit }: TaskListPageProps) {
  return (
    <main className="dashboard-container">
      <div className="ui-label">
        <h2>My Tasks</h2>
      </div>
      <section className="card">
        <h3>Task List</h3>
        <div className="task-container">
          {tasks.length === 0 ? (
            <p>No tasks yet. Create one!</p>
          ) : (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default TaskListPage;