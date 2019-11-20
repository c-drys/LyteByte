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

  // function generate html template for shopping cart
  const cart = (dish) => {
    return cartMarkup = `
      <table class="shoppingCart">
        <thread>
          <tr>
            <th scope="col">Dish<th>
            <th scope="col">Price<th>
            <th scope="col">Qty<th>
          </tr>
          <tbody>
            <tr>
              <td>${dish.name}</td>
              <td>${dish.price}</td>
              <td></td>
            </tr>
          <tbody>
        </thread>
      </table>
      <p id = "subTotal"><strong>Sub Total</strong>: </p>
      <input >
    `;
  }
  // callback cart function and push into the page


});

