import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { ButtonOutline, Container, EmptyMsgBox } from "../../styles/styles"
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import { toggleFiltersModal } from "../../store/modalSlice/modalSlice";
import getAllNotes from "../../utils/getAllNotes";
import FilterModal from "../../components/Modal/FilterModal/FilterModal";


const AllNotes = () => {
    const dispatch = useAppDispatch();
    const { mainNotes } = useAppSelector((state) => state.notesList);
    const { viewFiltersModal } = useAppSelector((state) => state.modal);
    const [filter, setFilter] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    const clearHandler = () => {
        setFilter("");
    }

  return (
    <Container>
        {/* 필터 모달 상태에 따라 활성화 및 비활성화 */}
        {viewFiltersModal && (
            <FilterModal
            handleFilter={filterHandler}
            handleClear={clearHandler}
            filter={filter}
            />
        )}
        {/* 메인노트 부분 */}
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

                    <div className="notes__filter-btn">
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