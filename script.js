document.getElementById('header').addEventListener('click', openNav);

function openNav(event) {
  event.stopPropagation();
  document.getElementById("mySidenav").classList.add("width");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("width")
;
}
function tog(x) {
  var div = "div"+x
  var divs = document.getElementById(div);
  var Btn = "btn"+x
  var btnText = document.getElementById(Btn);

  if (divs.style.height === "auto") {
    divs.style.height = "100vh";
    btnText.innerHTML = "READ MORE";
  } else {
    divs.style.height = "auto";
    btnText.innerHTML = "READ LESS";
      }
}