function Pizza (size) {
  this.size = size;
  this.topping = [];
};

Pizza.prototype.topping = function () {
  return this.topping
}

// function Topping (pepperoni, artichoke, anchovy){
//
// }

// function Size (small, medium, large){
//   this.small = small;
//   this.medium = medium;
//   this.large = large;
// }()


$(document).ready(function(){

  console.log(size);
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var sizeSelect = $("select#pizza-size").val();
    var toppingSelect = 
    var pizza = new Pizza (size,)

  });
});
