// id 속성이 clickBtn인 요소와 DOM 셀렉트
let clickBtn = document.getElementById("clickBtn");
let heading = document.getElementById("heading");
console.log(clickBtn);
console.dir(clickBtn);

// 선택된 DOM 요소에 이벤트 핸들러 걸기
clickBtn.onclick = function (e) {
    console.dir(document);
    document.body.style.backgroundColor = "yellow";
};

clickBtn.ondblclick = function (e) {
    console.dir(document);
    document.body.style.backgroundColor = "white";
};

// 문서의 거의 모든 요소가 객체가 될수 있다.
// 함수를 변수에 참조 시킨다.
// 함수를 배열에도 담을 수 있다.
// 함수를 다른 함수의 인자로 사용. (callback 함수)
