import { useState } from "react";
import SearchBox from "./SearchBox";
import TableContent from "./TableContent";
import TaskControl from "./TaskControl";

const Table = () => {
    const [modal, setModal] = useState(false);

  const openModal = () =>{
    
    setModal(!modal);
  } 
  return (
    <div className="mb-20" id="tasks">
      <div className="container">
        <SearchBox></SearchBox>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskControl openModal={openModal}></TaskControl>
          <TableContent></TableContent>
        </div>
      </div>
    </div>
  );
};

export default Table;
