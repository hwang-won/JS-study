import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common.js/Button";
import { BugTwoTone } from "@ant-design/icons";

// 회원가입 또는 로그인 폼을 보여줍니다.

const AuthFormBox = styled.div`
    h3 {
        margin: 0;
        color: #4d4d4d;
        margin-bottom: 1.25rem;
    }
`;

// input
const InputStyled = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: black;
        border-bottom: 1px solid #000000;
    }
    & + & {
        margin-top: 1rem;
    }
`;

// 회원가입 링크
const SignupLink = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: #bdbdbd;
        text-decoration: none;
        &:hover {
            color: #4d4d4d;
        }
    }
`;

const ButtonMarginTop = styled(Button)`
    margin-top: 2rem;
`;

const textMap = {
    login: "로그인",
    register: "회원가입",
};

const AuthForm = ({ type }) => {
    const text = textMap[type];
    return (
        <AuthFormBox>
            <form>
                <h3>{text}</h3>
                <InputStyled
                    autoComplete="username"
                    name="usename"
                    placeholder="아이디"
                />
                <InputStyled
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                {type === "register" && (
                    <InputStyled
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
                <ButtonMarginTop fullWidth>{text}</ButtonMarginTop>
            </form>
            <SignupLink>
                {type === "login" ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </SignupLink>
        </AuthFormBox>
    );
};

export default AuthForm;
