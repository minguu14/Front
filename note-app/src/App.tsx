import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./layout/Navbar/NavBar";
import Sidebar from "./layout/Sidebar/Sidebar";
import { useAppSelector } from "./hooks/redux";
import TagsModal from "./components/TagsModal/TagsModal";
import { ToastContainer } from "react-toastify";
import AllNotes from "./pages/AllNotes/AllNotes";

function App() {

  const { viewCreateNoteModal, viewEditTagsModal } = useAppSelector((state) => state.modal);
  
  return (
    <div className='app'>

      {viewEditTagsModal && <TagsModal type="edit"/> }

      <ToastContainer
      position="bottom-right"
      theme="light"
      pauseOnHover
      autoClose={1500}
      />

      <BrowserRouter>
      <Sidebar/>
      <div className="app_container">
        <NavBar/>
        <Routes>
            <Route path="/" element={<AllNotes/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
