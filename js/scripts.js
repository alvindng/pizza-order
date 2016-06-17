var pizzaOrder;

function Pizza (size) {
  this.size = size;
  this.toppings = [];
  this.totalPrice = 0;
};

Pizza.prototype.sizePrice = function () {
  if (this.size === "small" ) {
    this.totalPrice += 10
  } else if (this.size === "medium") {
    this.totalPrice += 15
  } else {
    this.totalPrice += 20
  }
  return this.totalPrice;
};

Pizza.prototype.toppingPrice = function (pizzaOrder) {
  pizzaOrder.toppings.forEach(function(topping){
    pizzaOrder.totalPrice+=5;
  })
  return this.totalPrice;
};

Pizza.prototype.list = function(pizzaOrder) {
  var toppingString = pizzaOrder.toppings.toString()
  return toppingString;
  }

$(document).ready(function(){
  $("#add-topping").click(function() {
    $("#new-toppings").append('<div class="new-topping form-group">' +
                              '<label for="topping-choice">Select your topping:</label>' +
                              '<select class="form-control topping-choice" id="topping-choice" name="">' +
                                '<option value="pepperoni">Pepperoni</option>' +
                                '<option value="artichoke">Artichoke</option>' +
                                '<option value="anchovy">Anchovy</option>'
                                + '</select>'
                                + '</div>')
  });

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaName = $("input#pizza-name").val();
    var sizeSelect = $("select#pizza-size").val();
    var pizzaOrder = new Pizza (sizeSelect);
    $("ul#pizzas").append("<li><span class='pizza'>" + pizzaName+ "</span></li>");

    $(".new-topping").each(function() {
      var toppingSelect = $(this).find("select.topping-choice").val();
      pizzaOrder.toppings.push(toppingSelect)
    });

    pizzaOrder.sizePrice();
    pizzaOrder.toppingPrice(pizzaOrder);

    $(".pizza").last().click(function() {
      var pizzaString = pizzaOrder.list(",");
      $("#show-order").show();
      $("#show-order h2").text(pizzaName);
      $(".pizza-size").text(pizzaOrder.size);
      $(".pizza-topping").text(pizzaOrder.toppings.toString());
      $(".total-cost").text("$" + pizzaOrder.totalPrice);
    });
  });
});
