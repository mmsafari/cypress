import TaskControl from "../components/TaskControl";
import TaskList from "../components/TaskList";
import { useState } from "react";
import NewTask from "../components/NewTask";
import Modal from "../components/Modal";
function HomePage() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [appliedFilter, setAppliedFilter] = useState("all");

  const displayedTasks = tasks.filter((task) => {
    if (appliedFilter === "all") {
      return true;
    }
    return task.category === appliedFilter;
  });

  function startAddTaskHandler() {
    setIsAddingTask(true);
  }

  function cancelAddTaskHandler() {
    setIsAddingTask(false);
  }

  function addTaskHandler(taskData) {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: Math.random().toString(),
          ...taskData,
        },
      ];
    });
    setIsAddingTask(false);
  }

  function setFilterHandler(category) {
    setAppliedFilter(category);
  }
  return (
    <>
      {isAddingTask && (
        <Modal onClose={cancelAddTaskHandler}>
          <NewTask onAddTask={addTaskHandler} onCancel={cancelAddTaskHandler} />
        </Modal>
      )}
      <TaskControl
        onStartAddTask={startAddTaskHandler}
        onSetFilter={setFilterHandler}
      />
      <TaskList tasks={displayedTasks} />
    </>
  );
}

export default HomePage;
