import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Task } from "./types/task";
import { initialTasks } from "./data/mockTasks";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCreateTask = (task: Task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? { ...task, id: editingTask.id } : t)));
      setEditingTask(null);
    } else {
      const newTask = { ...task, id: tasks.length + 1 };
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskListPage tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />} />
        <Route path="/create" element={<CreateTaskPage onCreateTask={handleCreateTask} editingTask={editingTask} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;