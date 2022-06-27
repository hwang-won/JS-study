import './App.css';
// 리엑트 부트스트랩
import { Navbar, Container, Nav } from 'react-bootstrap';
// FrontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
// 라우팅
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
// 서버 통신 axios
import axios from 'axios';
// code
import { useState } from 'react';
import data from './machinedata.js';
import ThingDetail from './route/thingDetail.js';
import Cart from './route/cart.js';
import About from './route/about.js';
import HostMode from './route/hostMode.js';

function App(){

  let [machine] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand onClick={()=>{ navigate('/') }}><FontAwesomeIcon icon={ faSeedling }/> 억새풀 <FontAwesomeIcon icon="fa-solid fa-seedling" /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>임대신청</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/') }}>커뮤니티</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/') }}>자료실</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/') }}>고객지원</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/about') }}>회사소개</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/hostMode') }}>호스트 모드</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/') }}>로그인</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      {/* 메인 페이지 */}
      <Routes>
        <Route path="/" element= {
          <>
          <div className="main_background"></div>        
          <div className="main_products">
            <div className="main_products_things">
              <h4>농업기계</h4>
              <HorizonLine></HorizonLine>
              {
                machine.map((a, i) => { 
                  return (
                    <Thing machine={ machine[i] }></Thing>
                  )
                })
              }
            </div>
          </div> 
          </>
        }></Route>

        {/* 상품 상세 페이지 */}
        <Route path="/detail/:id" element= {
            <ThingDetail machine={ machine }></ThingDetail>
        }></Route>

        {/* 장바구니 페이지 */}
        <Route path="/cart" element= {
          <>
            <Cart></Cart>
          </>
        }></Route>

        {/* 회사 정보 페이지 */}
        <Route path="/about" element= {
          <>
            <About></About>
          </>
        }></Route>

        {/* 호스트 모드 페이지 */}
        <Route path="/hostMode" element= {
          <>
            <HostMode></HostMode>
          </>
        }></Route>

        {/* 이벤트 페이지 */}
        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>

        {/* 404에러 페이지 */}
        <Route path="*" element= {
          <div> 404 error page </div>
        }></Route>
      </Routes>

    </div>
  )
}

// 메인 페이지 상품
function Thing(props) {
  return (
    <div>
      <img src={ props.machine.img } width="50%"></img>
      <h4>{ props.machine.title }</h4>
      <p> . </p>
    </div>
  )
}

// 이벤트 페이지 nested routes
function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
} 

// 수평선
const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span style={{ background: "#fff", padding: "" }}>{text}</span>
    </div>
  );
};

export default App;


