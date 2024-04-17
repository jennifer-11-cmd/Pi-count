const menu = document.getElementById("menu");

function dropDown() {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  menu.addEventListener("click", () => {
    menu.style.display = "none";
  });
}

let vals = document.querySelectorAll(".num");
let interval = 0;
let val = localStorage.getItem("val");

vals.forEach((val) => {
  let startValue = 3500;
  let endvalue = parseInt(val.getAttribute("data-val"));
  let duration = 1000;
  let counter = setInterval(function () {
    counter = localStorage.setItem("val", val);
    startValue += 1;
    val.textContent = startValue;

    if (startValue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});
