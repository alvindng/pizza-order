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

// function Size (small, medium, large){
//   this.small = small;
//   this.medium = medium;
//   this.large = large;
// }()


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
    var sizeSelect = $("select#pizza-size").val();
    var toppingSelect = $("select#topping-choice").val();
    var pizzaOrder = new Pizza (sizeSelect,toppingSelect);


  });
});
