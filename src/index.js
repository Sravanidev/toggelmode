import "./styles.css";
var toggel = document.getElementById("circle");
var body = document.body;
var heads = document.getElementById("app");

var count = 0;
toggel.addEventListener("click", function () {
  if (count % 2 === 0) {
    toggel.style.marginLeft = "80%";
    body.style.backgroundColor = "black";
    heads.style.backgroundColor = "white";
  } else {
    toggel.style.marginLeft = "2%";
    body.style.backgroundColor = "white";
    heads.style.backgroundColor = "white";
  }
  count++;
});
