window.addEventListener("load", function () {
  let itemList = [];
  const addBtn = this.document.querySelector("#add");
  addBtn.addEventListener("click", addList);
  // 추가되는 함수
  function addList() {
    const item = document.querySelector("#item").value;
    // console.log(item);
    if (item !== "") {
      itemList.push(item); //빈배열에 추가
      document.querySelector("#item").value = ""; //입력된 내용을 지움
      document.querySelector("#item").focus(); //텍스트 필드에 포커스설정
    }
    // console.log(itemList);
    // 보여지는 함수를 실행
    showList();
  }
  //   추가된 내용을 보여주는 함수
  function showList() {
    let list = `<ul>`; // ul태그 시작
    // itemList 복사본에 역순으로 정렬
    let rverseList = itemList.slice().reverse();
    // console.log(rverseList);
    // li목록
    rverseList.forEach(function (item, index) {
      // console.log(rverseList);
      // console.log(item);
      // console.log(index);
      //   실제 itemList 의 인덱스 계산
      const reIndex = itemList.length - 1 - index;
      //   console.log(reIndex);
      list += `<li>${item} <span class="close" id="${reIndex}"> X </span>  </li> `;
    });
    list += `</ul>`; // ul태그 닫기
    //html itemLIst에 추가
    document.querySelector("#itemList").innerHTML = list; // ul을 목록에 추가해서 화면표시
    // 삭제
    let remove = document.querySelectorAll(".close"); //삭제 버튼 선택
    remove.forEach(function (button) {
      button.addEventListener("click", removeList); //각 버튼에 삭제 이벤트 추가
    });
  }
  //   버튼삭제 기능함수
  function removeList() {
    let id = this.getAttribute("id");
    // console.log(id);
    itemList.splice(id, 1);
    showList();
  }
});
