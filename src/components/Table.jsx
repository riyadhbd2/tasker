import { useState } from "react";
import SearchBox from "./SearchBox";
import TableContent from "./TableContent";
import TaskControl from "./TaskControl";
import AddModal from "./AddModal";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [datas, setdatas] = useState([]);
  console.log(showModal);
  

  const handleOpenModal = () => {
    setShowModal(true);
    
  };
  const handleCloseModal = () => {
    setShowModal(false);

  };

  const allDatas =(datas)=>{
    setdatas(datas);
  }
  return (
    <>
      <div className="mb-20" id="tasks">
        <div className="container">
          <SearchBox></SearchBox>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskControl openModal={handleOpenModal}></TaskControl>
            <TableContent values={datas}></TableContent>
          </div>
        </div>
      </div>
      <AddModal show = {showModal} closeModal = {handleCloseModal} datas ={allDatas}></AddModal>
    </>
  );
};

export default Table;
