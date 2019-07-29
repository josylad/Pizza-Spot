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
  var fname = document.forms["orderform1"]["fname"].value;
  if (fname == "") {
    alert("First name must be filled out");
    return false;
  }
  var lname = document.forms["orderform1"]["lname"].value;
  if (lname == "") {
    alert("Last name must be filled out");
    return false;
  }
  var fullName = lname + (" ")+ fname;
  var result = price(size, crust, toppings, quantity, deliver);


  document.getElementById("custname").innerHTML = ("Name: ") + fullName;
  document.getElementById("output").innerHTML = ("Your order Total is = ") + result + (" KES");
  alert("Your total order is " + result + " KES." + " Thank You for Ordering Our Pizza! Your Order is on it's way!");
$("form#checkout").css('data-dismiss','modal');
$("#summary").show();
$("body, html").animate({
  scrollTop: $("#summary").offset().top
},1000)
}

// $('form').on('submit', function () {
//     var names = [];
//     $.each($(this).find('input, textarea'), function () {
//         names.push(this.name);
//     });
// });
// alert(names[0])
// $(document).ready(function () {
//  $("button#button2").click(function () {
//    var name = $("input#subject").val();
//    var name = $("textarea#message").val();
//    var name = $("input#email").val();
//    var name = $("input#name").val();
//    if ($("input#name").val() && $("input#email").val() && $("textarea#message").val() && $("input#subject").val() != "") {
//      alert(name + " Thankyou for contacting us!!");
//    } else {
//      alert("please enter your name,email,subject and message.")
//    }
//  });
// });
// var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
//
//      $("#output").append(newRow);
//    });'''


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
