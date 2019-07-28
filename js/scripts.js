$("input[name='delivery']").on("click", function() {
  $(".deladdress").toggle(this.value == "50" && this.checked);
});

var price = function(size, crust, toppings, quantity, deliver) {
  return ((size + crust + toppings) * quantity) + deliver
};

var toppingsPrice = function checkTotal() {
  document.orderform1.total.value = '';
  var sum = 0;
  for (i = 0; i < document.orderform1.toppings.length; i++) {
    if (document.orderform1.toppings[i].checked) {
      sum = sum + parseInt(document.orderform1.toppings[i].value);
    }
  }
  document.orderform1.total.value = sum;
}


function totalprice(form) {
  var size = parseInt(document.forms["orderform1"]["sizes"].value);
  if (size == "") {
    alert("size must be filled out");
    return false;
  }
  var crust = parseInt(document.forms["orderform1"]["crust"].value);
  if (crust == "") {
    alert("Crust must be filled out");
    return false;
  }
  var toppings = parseInt(document.getElementById("total").value);
  if (toppings == "") {
    alert("Toppings must be filled out");
    return false;
  }
  var quantity = parseInt(document.forms["orderform1"]["quantity"].value);
  if (quantity == "") {
    alert("Quantity must be filled out");
    return false;
  }
  var deliver = parseInt(document.querySelector('input[name="delivery"]:checked').value);
  // if (deliver == "") {
  //     alert("Delivery option must be  selected")();
  //     return false;
  //   }
  var result = price(size, crust, toppings, quantity, deliver);
  document.getElementById("output").innerHTML = result;
  alert(result);
}


// function pizzaOrder() {
//   this.firstName = first;
//   this.lastName = last;
//   this.email = email;
//   this.phone = phone;
//   this.size = pizzaSize;
//   this.crust = pizzaCrust;
//   this.toppings = pizzaToppings;
//   this.quantity = pizzaQuantity;
//   this.delivery = pizzaDelivery;
//   this.comment = comment;
//  }
//
//  pizzaOrder.prototype.fullName = function() {
//  return this.firstName + " " + this.lastName;
//  }
//  // user interface logic
//  $(document).ready(function() {
//    $("form#new-contact").submit(function(event) {
//      event.preventDefault();
//      var inputtedFirstName = $("input#new-first-name").val();
//      var inputtedLastName = $("input#new-last-name").val();
//      var inputtedStreet = $("input#new-street").val();
//      var inputtedCity = $("input#new-city").val();
//      var inputtedState = $("input#new-state").val();
//      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet,inputtedCity,inputtedState);
//      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//      $("input#new-first-name").val("");
//      $("input#new-last-name").val("");
//      $("input#new-street").val("");
//      $("input#new-city").val("");
//      $("input#new-state").val("");
//      $(".contact").last().click(function() {
//      $("#show-contact").show();
//      $("#show-contact h2").text(newContact.firstName);
//      $(".first-name").text(newContact.firstName);
//      $(".last-name").text(newContact.lastName);
//      $(".street").text(newContact.street);
//      $(".city").text(newContact.city);
//      $(".state").text(newContact.state);
//      });
//    });
//  });
