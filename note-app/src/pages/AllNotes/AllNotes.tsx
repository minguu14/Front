import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { ButtonOutline, Container, EmptyMsgBox } from "../../styles/styles"
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import { toggleFiltersModal } from "../../store/modalSlice/modalSlice";
import getAllNotes from "../../utils/getAllNotes";


const AllNotes = () => {
    const dispatch = useAppDispatch();
    const { mainNotes } = useAppSelector((state) => state.notesList);
    const [filter, setFilter] = useState("");
    const [searchInput, setSearchInput] = useState("");

  return (
    <Container>
        {/* 노트 부분 */}
        {mainNotes.length === 0 ? (
            <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
        ) : (
            <>
                <TopBox>
                    <InputBox>
                    <input 
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="노트의 제목을 입력해주세요."
                    />
                    </InputBox>

                    <div className="cotes__filter-btn">
                        <ButtonOutline
                        onClick={() => dispatch(toggleFiltersModal(true))}
                        className="nav__btn"
                        >
                          <span>정렬</span>  
                        </ButtonOutline>
                    </div>
                </TopBox>

                <Box>
                    {/* 노트 */}
                    {getAllNotes(mainNotes, filter)}
                </Box>
            </>
        )}
    </Container>
  )
}

export default AllNotes