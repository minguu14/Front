import { Dispatch } from "@reduxjs/toolkit"
import { Note } from "../types/note"
import { NotesIconBox } from "../styles/styles"
import { RiInboxUnarchiveFill } from "react-icons/ri"
import { toggleCreateNoteModal } from "../store/modalSlice/modalSlice"
import { deleteNote, restoreNote, setArchiveNotes, setEditNote, setTrashNotes, unArchiveNote } from "../store/notesListSlice/notesListSlice"
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa"


const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {

    const clickHandler = () => {
        dispatch(toggleCreateNoteModal(true));
        dispatch(setEditNote(note));    
    }

    if (type === "archive"){
        return (
            <>
                <NotesIconBox
                    onClick={() => dispatch(unArchiveNote(note))}
                    data-info="Unarchive"
                >
                    <RiInboxUnarchiveFill style={{fontSize: "1rem"}}/>
                </NotesIconBox>
                <NotesIconBox
                onClick={() => dispatch(setTrashNotes(note))}
                data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
          );
    } else if (type === "trash") {
        return(
            <>
                <NotesIconBox
                onClick={() => dispatch(restoreNote(note))}
                data-info="Restore"
                >
                    <FaTrashRestore/>
                </NotesIconBox>
                <NotesIconBox
                onClick={() => dispatch(deleteNote(note))}
                data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    }else {
        return(
            <>
                <NotesIconBox data-info="Edit">
                    <FaEdit style={{fontSize: "1rem"}} onClick={clickHandler}/>
                </NotesIconBox>
                <NotesIconBox
                onClick={() => dispatch(setArchiveNotes(note))}
                data-info="Archive"
                >
                    <FaArchive/>
                </NotesIconBox>
                <NotesIconBox
                onClick={() => dispatch(setTrashNotes(note))}
                data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    }
  
}

export default getRelevantBtns;