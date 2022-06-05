import './App.css';
import { useState } from 'react';



function App() {

  let [글제목, 글제목변경] = useState(['test1', 'test2', 'test3']);
  let [날짜] = useState(['2022.6.8']);
  let [좋아요, 좋아요수] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h4>React</h4>
      </div>
      <button onClick={ change }> 글수정 </button>
      <button onClick={ sort }> 정렬 </button>
      {/* <div className='list'>
        <h4>{ 글제목[0] } 
        <span onClick={ like }> ❤ </span> { 좋아요 } </h4>
        <p>{ 날짜 }</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }
        <span onClick={ like }> ❤ </span> { 좋아요 } </h4>
        <p>{ 날짜 }</p>
      </div>      
      <div className='list'>
        <h4 onClick={ modalTrue }>{ 글제목[2] }
        <span onClick={ like }> ❤ </span> { 좋아요 } </h4>
        <p>{ 날짜 }</p>
      </div> */}

      {
        글제목.map(function(a, i) {
          return (
            <div className='list'>
            <h4 onClick={ () => { modalChange(); setTitle(i)} }>{ 글제목[i] } 
            <span onClick={ ()=>{ 
              let copy = [...좋아요];
              copy[i] = copy[i] + 1;
              좋아요수(copy);
            }}> ❤</span> { 좋아요[i] } </h4>
            <p>{ 날짜 }</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} 날짜={날짜} title={title}/> : null
      }

    </div>
  );
  
  function like() {
    좋아요수(좋아요+1);
  }
  function change() {
    let copy = [...글제목];
    copy[0] = '테스트';
    글제목변경(copy);
  }
  
  function sort() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }

  function modalChange() {
    setModal(!modal);
  }
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>{props.날짜}</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
