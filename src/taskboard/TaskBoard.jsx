import React, { useState } from "react";
import Searchtask from "./Searchtask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {

    const defaultTask = {
        "id": crypto.randomUUID(),
        "title": "Learn React",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, perspiciatis!",
        "tags" : ["web", "react", "js"],
        "priority": "High",
        "isFavorite": true

    }
    const[tasks, setTasks] = useState([defaultTask]);
    const[showAddModal, setShowAddModal] = useState(false);

    const handleAddTask = (task) =>{
        console.log("task", task);
        setTasks([...tasks, task]);
        setShowAddModal(false);
    }

  return (
    <div className="container mx-auto">
      <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal onSave={handleAddTask}></AddTaskModal>}
        <div className="container">
          <Searchtask></Searchtask>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
           <TaskAction onAddClick={()=>setShowAddModal(true)}></TaskAction>
           <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
