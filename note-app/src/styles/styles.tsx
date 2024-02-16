import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 0px 25px 25px;
    @media screen and (max-width: 650px) {
        padding 20px;
    }
`;

export const NotesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
`;

export const EmptyMsgBox = styled.div`
    text-align: center;
    font-size: clamp(1.2rem, 2vw, 1.3rem);
    font-weight: 500;
`;

export const ButtonFill = styled.button`
    padding: 6px 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: 250ms background-color ease-in-out;
    span {
        font-size: clamp(15px, 2.5vw. 1.2rem);
        font-weight: 500;
    }
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);

    &:hover {
        background-color: rgb(253, 239, 195, 0.5);
    }

    @media screen and (max-width: 600px) {
        padding: 6px 12px;
    }
`;