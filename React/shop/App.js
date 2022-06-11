import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import data from './machinedata.js';

function App(){

  let [machine] = useState(data);
  console.log({machine});

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
          {/* <div className="main_goods_thing">
            <img src="https://www.yanmar.com/ltc/kr/agri/img/d3da6c6016/img_index_01.jpg" width="70%"></img>
            <h4>{ machine[0].title }</h4>
            <p>{ machine[0].price }</p>
          </div>
          <div className="main_goods_thing">
            <img src="https://www.yanmar.com/ltc/kr/agri/img/6e1eb89142/img_index_19.jpg" width="70%"></img>
            <h4>{ machine[1].title }</h4>
            <p>{ machine[1].price }</p>
          </div>
          <div className="main_goods_thing">
            <img src="https://www.yanmar.com/ltc/kr/agri/img/d6e76e72da/img_index_27.jpg" width="70%"></img>
            <h4>{ machine[2].title }</h4>
            <p>{ machine[2].price }</p>
          </div> */}
          {
            machine.map((a, i) => {
              return (
                <Thing machine={ machine[i] }></Thing>
              )
            })
          }
        </div>
      </div> 

    </div>
  )
}

function Thing(props) {
  return (
    <div>
      <img src={'https://www.yanmar.com/ltc/kr/agri/img/' + props.machine.code + '.jpg'} width="70%"></img>
      <h4>{ props.machine.title }</h4>
      <p>{ props.machine.price }</p>
    </div>
  )
}

export default App;


