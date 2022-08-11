import styled from "styled-components";
import { Link } from "react-router-dom";

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.

// 배경화면
const AuthTemplateBox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 힁색 박스
const WhiteBox = styled.div`
    .logo_area {
        display: block;
        padding-top: 1rem;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;

        a {
            color: black;
            font-size: 24px;
            text-decoration: none;
        }
    }

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    padding: 2rem;
    width: 360px;
    background-color: white;
    border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBox>
            <WhiteBox>
                <div className="logo_area">
                    <Link to="/login">ANBANG</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBox>
    );
};

export default AuthTemplate;
