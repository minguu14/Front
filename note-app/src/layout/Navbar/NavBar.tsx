import { FiMenu } from "react-icons/fi";
import { Container, StyledNav } from "./Navbar.styles";
import { ButtonFill } from "../../styles/styles";
import { useAppDispatch } from "../../hooks/redux";
import { toggleMenu } from "../../store/menuSlice/menuSlice";
import { useLocation } from "react-router-dom";
import getStandardName from "../../utils/getStandardName";
import { toggleCreateNoteModal } from "../../store/modalSlice/modalSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();

    const location = useLocation();
    const { pathname, state } = location;
    
    if (pathname === "/404") {
     return null;
    }

  return (
    <StyledNav>
      <div className="nav_menu">
        {/* 메뉴 클릭 시 토글 메뉴 활성화. */}
        <FiMenu onClick={() => dispatch(toggleMenu(true))}/>
      </div>
      <Container>
        {/* 상단 타이틀 */}
        <div className="nav__page-title">{state ? getStandardName(state) : "Notes"}</div>
      {/* Trash와 Archive 상태가 아닐 때, 노트 생성 버튼 활성화. */}
      {/* 버튼 클릭 시 노트 생성 모달 활성화 */}
        {state !== "Trash" && state !== "Archive" && (
            <ButtonFill 
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
            >
                <span>+</span>
            </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default NavBar;
