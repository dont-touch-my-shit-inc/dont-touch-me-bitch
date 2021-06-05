function pop(){
    let timerInterval
    Swal.fire({
title: '<strong>Credits</strong>',
icon: 'info',
html:
  'Original website from the <b>capsule Team</b>, ' +
  'updated by <b>Coco Tweaks Team</b> ' +
  'we made are own version if you have any questions please DM on <a href="https://www.instagram.com/roarijo89_tweaks/"> <i class="fab fa-instagram"></i> Instagram</a>',
showCloseButton: true, 
focusConfirm: false,
confirmButtonText:
  '<i class="fas fa-heart"></i> Great!',
confirmButtonAriaLabel: 'heart, great!',

});
  }
// in type possible value are success/error/wa/rning /info.