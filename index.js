

function hover(image) {
  const val = document.getElementById(image);

  for (item of val.children) {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
  }
}


$(document).ready(function(){
    $('[tool-tip-toggle="my-tooltip"]').tooltip({
      placement : 'bottom'
    });
  });