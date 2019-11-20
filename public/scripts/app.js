$(document).ready(() => {

  // toggle sidebar menu
  $("#sidebarCollapse").click(function() {
    $("#sidebar").toggleClass("active");
  });

  // template generate the cart item
  const cartItem = (item) => {
    return itemMarkup = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>$${item.total}</td>
        <td><a href="#" class="btn btn-danger btn-sm"><i class="material-icons">close</i></a></td>
      </tr>
    `;
  }

  // retrieve the localstorage
  const getCartItems = () => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"))

    if (cartFromLocalStorage) {
      return cartFromLocalStorage
    } else {
      return {}
    }
  }

  // add button listener event
  $(".addItemToCart").click(function(e) {
    const $addToCartBtn = $(e.target);

    const dish = $addToCartBtn.data();

    const quantity = $addToCartBtn.closest('tr').find('input[name="quantity"]').val()

    const cart = getCartItems()

    cart[dish.id] = {
      id: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: quantity
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  });

  // cart Button listener to show the modalCart
  $("#modalCart").on("show.bs.modal", function(event) {
    const cart = getCartItems();
    let grandTotal = 0;

    for(let itemID in cart) {
      const item = cart[itemID]
      item.total = item.quantity * item.price
      grandTotal += item.total

      $(".cartItems").prepend(cartItem(item));
    }

    $('.price.total').html(grandTotal)

  })

  // cart Button listener to empty action of insert html
  $("#modalCart").on("hidden.bs.modal", function(event) {
    const modal = $(this)
    modal.find('.cartItems').empty()
  })

  // submit Button listener
  $("#submitOrder").click(function(e) {
    e.preventDefault();

    const order = getCartItems();
    $.ajax({
      method: "POST",
      url: "/order",
      dataType: "json",
      data: order
    })
    .then((res) => {
      window.location.assign(`/order/${res.order_id}`);
      localStorage.setItem("cart", JSON.stringify({}));
    })
    .catch((err) => {
      console.log(err);
    })
  })

});

