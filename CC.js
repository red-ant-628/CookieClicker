cookies = 0

document.getElementById('cookie').onclick = function() {
  cookies += 1
  document.getElementById('num_cookies').innerHTML = cookies
}

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
