const list = document.getElementById('list');
var stringKey = JSON.parse(localStorage.getItem('userInitials'));

if (stringKey !== null) {
  for (var i = 0; i < stringKey.length; i++) {
    var liEL = document.createElement('li');
    liEL.innerText = `Initials: ${stringKey[i].initials} Score: ${stringKey[i].score}`;
    list.appendChild(liEL);
  }
  //creates a list for all the different stored material.
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  localStorage.removeItem('userInitials');
  list.innerHTML = ''; // Clear the displayed list
})