function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 2000);
  console.log('3');
}
execute();

// 함수를 호출하면 2가 콜백 함수로 던져지고 3으로 바로 감
