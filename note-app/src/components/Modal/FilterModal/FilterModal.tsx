import React from "react"
import { useAppDispatch } from "../../../hooks/redux";
import { DeleteBox, FixedContainer } from "../Modal.styles";
import { Box, Container, TopBox } from "./FilterModal.styles";
import { FaTimes } from "react-icons/fa";
import { toggleFiltersModal } from "../../../store/modalSlice/modalSlice";

interface FilterModalProps {
    handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClear: () => void;
    filter: string;
}

const FilterModal: React.FC<FilterModalProps> = ({handleFilter, handleClear, filter}) => {
    const dispatch = useAppDispatch();

  return (
    <FixedContainer>
        <Container>
            <DeleteBox
            onClick={() => dispatch(toggleFiltersModal(false))}
            className="filters__close"
            >
                <FaTimes />
            </DeleteBox>

            <TopBox>
                <div className="filters__title">정렬</div>
                <small className="filters__delete" onClick={handleClear}>
                    CLEAR
                </small>
            </TopBox>

            <Box>
                <div className="filters__subtitle">PRIORITY</div>
                <div className="filters__check">
                    <input 
                    type="radio"
                    name="filter"
                    value="low"
                    id="low"
                    checked={filter === "low"}
                    onChange={(e) => handleFilter(e)}
                    />
                    <label htmlFor="low">Low to High</label>
                </div>
                <div className="filters__check">
                    <input 
                    type="radio"
                    name="filter"
                    value="high"
                    id="high"
                    checked={filter === "high"}
                    onChange={(e) => handleFilter(e)}
                    />
                    <label htmlFor="low">High to Low</label>
                </div>
            </Box>
            <Box>
                <div className="filters__subtitle">DATE</div>
                <div className="filters__check">
                    <input 
                    type="radio"
                    name="filter"
                    value="latest"
                    id="new"
                    checked={filter === "latest"}
                    onChange={(e)=>handleFilter(e)}
                     />
                     <label htmlFor="new">Sort by Latest</label>
                </div>
                <div className="filters__check">
                    <input 
                    type="radio"
                    name="filter"
                    value="created"
                    id="create"
                    checked={filter === "created"}
                    onChange={(e)=>handleFilter(e)}
                     />
                     <label htmlFor="create">Sort by Created</label>
                </div>
                <div className="filters__check">
                    <input 
                    type="radio"
                    name="filter"
                    value="edited"
                    id="edit"
                    checked={filter === "edited"}
                    onChange={(e)=>handleFilter(e)}
                     />
                     <label htmlFor="create">Sort by Edited</label>
                </div>
            </Box>
        </Container>
    </FixedContainer>
  )
}

export default FilterModal