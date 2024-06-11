import { useState } from "react";
import SearchBox from "./SearchBox";
import TableContent from "./TableContent";
import TaskControl from "./TaskControl";
import AddModal from "./AddModal";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  

  const handleOpenModal = () => {
    setShowModal(true);
    
  };
  const handleCloseModal = () => {
    setShowModal(false);

  };
  return (
    <>
      <div className="mb-20" id="tasks">
        <div className="container">
          <SearchBox></SearchBox>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskControl openModal={handleOpenModal}></TaskControl>
            <TableContent></TableContent>
          </div>
        </div>
      </div>
      <AddModal show = {showModal} closeModal = {handleCloseModal}></AddModal>
    </>
  );
};

export default Table;
