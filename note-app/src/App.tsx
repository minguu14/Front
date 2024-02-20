import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./layout/Navbar/NavBar";
import Sidebar from "./layout/Sidebar/Sidebar";
import { useAppSelector } from "./hooks/redux";
import TagsModal from "./components/Modal/TagsModal/TagsModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AllNotes from "./pages/AllNotes/AllNotes";
import CreateNoteModal from "./components/Modal/CreateNoteModal/CreateNoteModal";
import ArchiveNotes from "./pages/ArchiveNotes/ArchiveNotes";
import TrashNotes from "./pages/TrashNotes/TrashNotes";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TagNotes from "./pages/TagNotes/TagNotes";

function App() {

  const { viewCreateNoteModal, viewEditTagsModal } = useAppSelector((state) => state.modal);
  
  return (
    <div className='app'>

      {viewEditTagsModal && <TagsModal type="edit"/> }
      {viewCreateNoteModal && <CreateNoteModal /> }

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
            <Route path="/archive" element={<ArchiveNotes/>}></Route>
            <Route path="/trash" element={<TrashNotes/>}></Route>
            <Route path="/tag/:name" element={<TagNotes/>}></Route>
            <Route path="/404" element={<ErrorPage />}></Route>
            <Route path="/*" element={<Navigate to={"/404"}/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
