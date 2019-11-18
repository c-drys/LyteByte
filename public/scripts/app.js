$(document).ready(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  // toggle sidebar menu
  $("#sidebarCollapse").click(function() {
    $("#sidebar").toggleClass("active");
  });
});

