import NoteCard from "../components/NoteCard/NoteCard";
import { NotesContainer} from "../styles/styles"
import { Note } from "../types/note";

const filteredNotes = (notes: Note[], filter: string) => {

  // 우선순위 별로 분류 된 노트들을 각각 가져옴.
  const lowPriority = notes.filter(({ priority }) => priority === "low");
  const highPriority = notes.filter(({ priority }) => priority === "high");

  // 체크 된 필터 별로 정렬하기.
  if (filter === "low") {
      return [...lowPriority, ...highPriority];
  } else if (filter === "high") {
      return [...highPriority, ...lowPriority];
  } else if (filter === 'latest') {
      return notes.sort((a, b) => b.createdTime - a.createdTime);
  } else if (filter === "created") {
      return notes.sort((a, b) => a.createdTime - b.createdTime);
  } else if (filter === "edited") {
      const editedNotes = notes.filter(({ editedTime }) => editedTime);
      const normalNotes = notes.filter(({ editedTime }) => !editedTime);

      const sortEdited = editedNotes.sort((a, b) => ((b.editedTime as number) - (a.editedTime as number)));
      return [...sortEdited, ...normalNotes];
  } else {
      return notes;
  }

}


const getAllNotes = (mainNotes: Note[], filter: string) => {
  // pinned 상태와 normal 상태의 note들을 각각 가져옴.
  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  if(normal.length !== 0 && pinned.length === 0) {
    // !Pinned
    return (
      <>
          <div className="allNotes__notes-type">
              All Notes
          </div>
          <NotesContainer>
            {/* normal 상태의 카드들만 보여줌 */}
              {filteredNotes(normal, filter).map((note) =>  (
                  <NoteCard key={note.id} note={note} type="notes" />
              ))}
          </NotesContainer>
      </>
    );
  }

  if(pinned.length !== 0 && normal.length === 0) {
    // Pinned
    return (
      <>
        <div className="allNotes__notes-type">
            Pinned Notes <span>({pinned.length})</span>
        </div>
        <NotesContainer>
          {/* Pinned된 note들만 보여줌 */}
            {filteredNotes(pinned, filter).map((note) => (
              <NoteCard key={note.id} note={note} type="notes"/>
            ))}
        </NotesContainer>
      </>
    )
  }

  if(pinned.length !== 0 && normal.length !== 0) {
    return (
      <>
        <div>
          {/* pinned 상태와 normal 상태 둘 다 보여줌 */}
          <div className="allNotes__notes-type">
            Pinned Notes <span>({pinned.length})</span>
          </div>
          <NotesContainer>
            {filteredNotes(pinned, filter).map((note) => (
              <NoteCard key={note.id} note={note} type="notes"/>
            ))}
          </NotesContainer>
        </div>
        <div>
          <div className="allNotes__notes-type">
            All Notes <span>({normal.length})</span>
          </div>
          <NotesContainer>
            {filteredNotes(normal, filter)?.map((note) => (
              <NoteCard key={note.id} note={note} type="notes"/>
            ))}
          </NotesContainer>
        </div>
      </>
    )
  }
}

export default getAllNotes