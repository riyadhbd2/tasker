import AddModal from "./components/AddModal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Table from "./components/Table";


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Table></Table>
      <Footer></Footer>
      <AddModal></AddModal>
    </div>
  );
};

export default App;