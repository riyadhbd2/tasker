import React from "react";
import Searchtask from "./Searchtask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <div className="container mx-auto">
      <section className="mb-20" id="tasks">
        <div className="container">
          <Searchtask></Searchtask>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
           <TaskAction></TaskAction>
           <TaskList></TaskList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
