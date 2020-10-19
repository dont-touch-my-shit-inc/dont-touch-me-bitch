// With jQuery
$(document).on({
  "contextmenu": function(e) {
      console.log("ctx menu button:", e.which); 

      // Stop the context menu
      e.preventDefault();
  },
  "mousedown": function(e) { 
      console.log("normal mouse down:", e.which); 
  },
  "mouseup": function(e) { 
      console.log("normal mouse up:", e.which); 
  }
});

function disableClick(){
  document.onclick=function(event){
    if (event.button == 2) {
      alert('Right Click Message');
      return false;
    }
  }
}

$('img').on('dragstart', function(event) { event.preventDefault(); });