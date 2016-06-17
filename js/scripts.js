function Pizza (size,topping) {
  this.size = size;
  this.topping = topping;
};


//
// Pizza.prototype.topping = function () {
//   return this.topping
// }

// function Topping (pepperoni, artichoke, anchovy){
//
// }

$(document).ready(function(){
  $("#add-topping").click(function() {
    $("#new-toppings").append('<div class="new-topping form-group">' +
                              '<label for="topping-choice">Select your topping:</label>' +
                              '<select class="form-control" id="topping-choice" name="">' +
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
    var toppingSelect = $("select#topping-choice").val();
    var pizzaOrder = new Pizza (sizeSelect,toppingSelect);
    $("ul#pizzas").append("<li><span class='pizza'>" + pizzaName+ "</span></li>");

    $(".pizza").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(pizzaName);
      $(".pizza-size").text(pizzaOrder.size);
      $(".pizza-topping").text(pizzaOrder.topping);
      // $("ul#addresses").text("");
      // newContact.addresses.forEach(function(address) {
      //   $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
  });






});
