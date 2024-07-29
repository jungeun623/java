window.addEventListener("load", function () {
    const menuItem = this.document.querySelectorAll(".menu-item");
    menuItem.forEach(function (item) {
      // console.log(item);
      item.addEventListener("click", function () {
        menuItem.forEach(function (i) {
          // console.log(i);
          if (i !== item) {
            i.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
    });
    this.document.addEventListener("click", function (event) {
      let isClick = false;
      menuItem.forEach(function (item) {
        if (item.contains(event.target)) {
          // console.log(item.contains(event.target));
          isClick = true;
        }
      });
      if (!isClick) {
        menuItem.forEach(function (i) {
          i.classList.remove("active");
        });
      }
    });
    // 해당하는 메뉴를 클릭했을때 다른 메뉴는 없어지고 해당하는 메뉴만 나오는코드
  });
  