function pop(){
  let timerInterval
  Swal.fire({
title: '<strong>Repo updates</strong>',
icon: 'info',
html:
'<br>' +
'<div class="pvw-title"><b>Recenly added: </b></div></strong>' +
'<br>' +
'<div class="dev-title"><b>Developer: </b></div></strong>' +
'<br>' +
'<div class="sec-title"><b>Section: </b></div></strong>' +
'<br>' +
'<div class="time-title"><b>Added Date: </b></div></strong>',
showCloseButton: true, 
focusConfirm: false,
confirmButtonText:
'Ok',
confirmButtonAriaLabel: 'heart, great!',

});
}