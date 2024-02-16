import { FaLightbulb } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { Container, ItemsBox, MainBox, StyledLogo } from "./Sidebar.styles";
import { toggleMenu } from "../../store/menuSlice/menuSlice";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector((state) => state.menu);
  return (
    <Container openMenu={isOpen ? "open" : ""}>
        <MainBox openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
            <h1>Keep</h1>
        </StyledLogo>

        <ItemsBox>
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
        </ItemsBox>
        </MainBox>
    </Container>
  )
}

export default Sidebar