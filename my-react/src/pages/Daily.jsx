import { useState } from "react";

function Daily() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      status: null,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function markTask(id, newStatus) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <div className="daily-page">
      <h1>Daily Checklist</h1>
      <p>Add what you want to do today, then tick or cross it off at the end of the day.</p>

      <div className="add-task-row">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className={"task-item " + (task.status || "")}>
            <span className="task-text">{task.text}</span>

            <div className="task-actions">
              <button className="tick-btn" onClick={() => markTask(task.id, "done")}>
                ✓
              </button>
              <button className="cross-btn" onClick={() => markTask(task.id, "missed")}>
                ✗
              </button>
              <button className="remove-btn" onClick={() => removeTask(task.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Daily;