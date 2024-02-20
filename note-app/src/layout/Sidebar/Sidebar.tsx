import { FaArchive, FaLightbulb, FaTag, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { Container, ItemsBox, MainBox, StyledLogo } from "./Sidebar.styles";
import { toggleMenu } from "../../store/menuSlice/menuSlice";
import { NavLink } from "react-router-dom";
import getStandardName from "../../utils/getStandardName";
import { toggleTagsModal } from "../../store/modalSlice/modalSlice";
import { MdEdit } from "react-icons/md";
import { v4 } from "uuid";

// 사이드바 아이템
const items = [
  {icon: <FaArchive/>, title: "Archive", id: v4()},
  {icon: <FaTrash/>, title: "Trash", id: v4()},
]

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector((state) => state.menu);
    const { tagsList } = useAppSelector((state) => state.tag);
    
  return (
    <Container openmenu={isOpen ? "open" : ""}>
        <MainBox openmenu={isOpen ? "open" : ""}>
        <StyledLogo>
            <h1>Keep</h1>
        </StyledLogo>

        <ItemsBox>
          {/* 노트 부분 */}
            <li onClick={()=>dispatch(toggleMenu(false))}>
                <NavLink
                  to={"/"}
                  state={"notes"}
                  className={({ isActive }) => 
                    isActive ? "active-item" : "inactive-item"}
                >
                <span><FaLightbulb/></span>
                <span>Notes</span>
                </NavLink>
            </li>

            {/* 태그 부분 */}
            {tagsList?.map(({tag, id}) => (
              <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                <NavLink
                to={`/tag/${tag}`}
                state={`${tag}`}
                className={({ isActive }) => isActive ? 'active-item' : 'inactive-item'}
                >
                  <span>
                    <FaTag/>
                  </span>
                  <span>{getStandardName(tag)}</span>
                </NavLink>
              </li>
            ))}

            {/* 태그 수정 부분 */}
            <li
            className="sidebar__edit-item"
            onClick={() => dispatch(toggleTagsModal({type: "edit", view: true}))}
            >
              <span>
                <MdEdit />
              </span>
              <span>Edit Notes</span>
            </li>
            
            {/* 다른 아이템 */}
            {items.map(({icon, title, id}) => (
              <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                <NavLink
                to={`/${title.toLowerCase()}`}
                state={`${title}`}
                className={({isActive}) => isActive ? "active" : "inactive-item"}
              >
                <span>{icon}</span>
                <span>{title}</span>
                </NavLink>
              </li>
            ))}
        </ItemsBox>
        </MainBox>
    </Container>
  )
}

export default Sidebar