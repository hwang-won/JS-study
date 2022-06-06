import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  let [글제목, 글제목변경] = useState(['test1', 'test2', 'test3']);
  let [날짜, 날짜변경] = useState(['2022.6.8', '2022.6.8', '2022.6.8']);
  let [좋아요, 좋아요수] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, valueChange] = useState('');

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
              <span onClick={ (e)=>{
                e.stopPropagation(); 
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요수(copy);
              }}> ❤</span> { 좋아요[i] } 
            </h4>
            <p>{ 날짜[i] }</p>
            <button onClick={ () => {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            } }>삭제</button>
            </div>
          )
        })
      }

      <input onChange={ (e) => { 
        valueChange(e.target.value); 
        } }></input>
      <button onClick={ write }>글쓰기</button>


      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} 날짜={날짜} title={title}/> : null
      }

    </div>
  );
  
  function like() {
    좋아요수(좋아요+1);
  }
  function change() {
    // ... : 괄호 벗기기
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

  function write() {
    let copy = [...글제목];
    copy.unshift(inputValue);
    글제목변경(copy);

    let copy1 = [...좋아요];
    copy1.unshift(0);
    좋아요수(copy1);
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

/*
state 쓰는 이유 
state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줌

리액트에서 동적인 UI 만드는 step
1. html css로 미리 UI 디자인을 다 해놓고
2. UI의 현재 상태를 state로 저장해두고
3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성 
*/