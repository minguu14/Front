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
        <FiMenu onClick={() => dispatch(toggleMenu(true))}/>
      </div>

      <Container>
        <div className="nav__page-title">{getStandardName(state)}</div>

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
