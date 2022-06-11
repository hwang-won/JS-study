import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

function App(){
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={ faSeedling }/> 억새풀 <FontAwesomeIcon icon="fa-solid fa-seedling" /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Cart">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="main_background"> </div>

      <div className="main_goods">
        <div className="main_goods_things">
          <div className="main_goods_thing">
            <img src="https://www.yanmar.com/ltc/kr/agri/img/d3da6c6016/img_index_01.jpg" width="80%"></img>
            <h4>트렉터</h4>
            <p>상품설명</p>
          </div>
          <div className="main_goods_thing">
            <img src="https://www.yanmar.com/ltc/kr/agri/img/6e1eb89142/img_index_19.jpg" width="80%"></img>
            <h4>콤바인</h4>
            <p>상품설명</p>
          </div>
          <div className="main_goods_thing">
            <img src="https://www.yanmar.com/ltc/kr/agri/img/d6e76e72da/img_index_27.jpg" width="80%"></img>
            <h4>이양기</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div> 

    </div>
  );
}

export default App;


