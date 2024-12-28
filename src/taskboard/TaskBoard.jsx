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
    const[taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddEditTask = (newTask, isAdd) =>{
        if(isAdd){
            setTasks([...tasks, newTask]);
        } else{
            setTasks(
                tasks.map((task) =>{
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            )
        }
        
        setShowAddModal(false);
    }

    const handleEditTask = (task) =>{
        setTaskToUpdate(task);
        setShowAddModal(true);
    
    }

  return (
    <div className="container mx-auto">
      <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal taskForUpdate={taskToUpdate}  onSave={handleAddEditTask}></AddTaskModal>}
        <div className="container">
          <Searchtask></Searchtask>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
           <TaskAction onAddClick={()=>setShowAddModal(true)}></TaskAction>
           <TaskList onEdit={handleEditTask} tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
