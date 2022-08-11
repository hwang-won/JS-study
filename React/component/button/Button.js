import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    cursor: pointer;

    background: #4d4d4d;
    &:hover {
        background: gray;
    }

    ${(props) =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.25rem;
        `}

    ${(props) =>
        props.cyan &&
        css`
            background: red;
            $:hover {
                background: black;
            }
        `}
`;

const Button = (props) => <ButtonStyled {...props} />;

export default Button;
