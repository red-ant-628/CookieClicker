cookies = 0

document.getElementById('cookie').onclick = function() {
  cookies += 1
  document.getElementById('num_cookies').innerHTML = cookies
}
