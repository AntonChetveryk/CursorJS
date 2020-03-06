const div = document.querySelector(".test");
const item = document.querySelectorAll(".item"),
  container = document.querySelector(".container"),
  audio = document.querySelectorAll("audio"),
  listnerKeyDown = function(event) {
    const keyCode = event.keyCode;
    for (let i = 0; i < item.length; i++) {
      if (keyCode == item[i].id) {
        item[i].classList.add("bigger");
        item[i].lastElementChild.currentTime = 0;
        item[i].children[0].play();
      }
    }
  },
  listnerKeyUp = function(event) {
    const keyCode = event.keyCode;
    for (let i = 0; i < item.length; i++) {
      if (keyCode == item[i].id) {
        item[i].classList.remove("bigger");
      }
    }
  };

document.body.addEventListener("keyup", listnerKeyUp);
document.body.addEventListener("keydown", listnerKeyDown);
