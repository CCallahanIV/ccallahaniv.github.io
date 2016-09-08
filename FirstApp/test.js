var msg = "This is the ACTUAL test message";

function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}
updateMessage();
