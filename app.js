var removalButtons = document.getElementsByClassName('removal');

function removeParent(){
  var rowToRemove = this.parentNode.parentNode;

  rowToRemove.parentNode.removeChild(rowToRemove);
};
for(var i = 0; i < 4; i++){
  removalButtons[i].addEventListener('click', removeParent);
}