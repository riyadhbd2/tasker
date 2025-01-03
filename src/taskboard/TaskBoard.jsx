import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import Searchtask from "./Searchtask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, perspiciatis!",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  //Task delete function
  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id == !taskId);
    setTasks(taskAfterDelete);
  };

  //    All Delete
  const handleDeleteAll = () => {
    const remainig = [];
    setTasks(remainig);
  };

  const handleFavorite = (id) =>{
    console.log(id);
    const taskIndex = tasks.findIndex(task => task.id === id );
    
    const newTasks = [...tasks];

    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;

    setTasks(newTasks);
  }

  const handleSearch = (searchTerm) =>{
    const filtered = tasks.filter((task)=>task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setTasks([...filtered]);
  }

  

  return (
    <div className="container mx-auto">
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            taskForUpdate={taskToUpdate}
            onSave={handleAddEditTask}
            onCloseClick={handleCloseModal}
          ></AddTaskModal>
        )}
        <div className="container">
          <Searchtask onSearch={handleSearch}></Searchtask>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              handleAllDelete={handleDeleteAll}
              onAddClick={() => setShowAddModal(true)}
            ></TaskAction>
            <TaskList
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
              tasks={tasks}
              handleToggle={handleFavorite}
            ></TaskList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
