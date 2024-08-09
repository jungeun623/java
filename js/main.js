window.onload =function(){
 //1. 변수 애플을 선언하고  애플에 값을 할당한다
      //2. 변수 바나나를 선언하고  바나나에 값을 할당한다
      // 3. 합계를 선언하고 거기에 애플이랑 바나를 더한내용을 할당한다.
      // 4.화면출력 : 애플이랑 바나나를 합한 가격은 ()이다.
      var apple = 3000;
      var banana = 2000;
      var total = apple + banana;
      var total1 = apple - banana
      document.write(`<p class = "total" >사과랑 바나나를 합한 가격은 <span>${total}원 </span> 입니다.<p/><br>`);
      document.write(`사과랑 바나나를 뺀 가격은 ${total1}원 입니다.`);
}
window.addEventListener("load",function(){

})
