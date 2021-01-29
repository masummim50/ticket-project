const firstClassPlusBtn = document.getElementById('first-class-plus');
const firstClassMinusBtn = document.getElementById('first-class-minus');
const economyClassPlusBtn = document.getElementById('economy-class-plus');
const economyClassMinusBtn = document.getElementById('economy-class-minus');

firstClassPlusBtn.addEventListener('click', function(){

  updateQuantityAndSubtotal('first-class-quantity', 150, 1);
  updateTax();
  updateTotal();
 
});

firstClassMinusBtn.addEventListener('click', function(){
  var firstTicketQuantity = parseFloat(document.getElementById('first-class-quantity').value);
  if(firstTicketQuantity == 0){
    alert('Negetive amount of ticket can not be bought');
  }
  else{
  updateQuantityAndSubtotal('first-class-quantity',150, -1);
  updateTax();
  updateTotal();
  }
});

economyClassPlusBtn.addEventListener('click', function(){
  updateQuantityAndSubtotal('economy-class-quantity',100, 1);
  updateTax();
  updateTotal();
})
economyClassMinusBtn.addEventListener('click', function(){
  var economyTicketQuantity = parseFloat(document.getElementById('economy-class-quantity').value);
  if(economyTicketQuantity == 0){
    alert('Negetive amount of ticket can not be bought');
  }
  else{
  updateQuantityAndSubtotal('economy-class-quantity',100, -1);
  updateTax();
  updateTotal();
  }
});


function updateQuantityAndSubtotal(id, ticketPrice, ticketValue){
  
  var firstTicketQuantity = parseFloat(document.getElementById(id).value);
  firstTicketQuantity = firstTicketQuantity + ticketValue;
  document.getElementById(id).value = firstTicketQuantity;
  var subtotal = document.getElementById('subtotal');
  subtotal.innerText = parseFloat(subtotal.innerText) + (ticketPrice*ticketValue);
};

function updateTax(){
  var subtotalNumber = parseFloat(document.getElementById('subtotal').innerText);
  var tax = document.getElementById('tax').innerText;
  var taxNumber = parseFloat(tax);
  document.getElementById('tax').innerText = (subtotalNumber*10)/100;

};

function updateTotal(){
  var subtotalNumber = parseFloat(document.getElementById('subtotal').innerText);
  var taxNumber = parseFloat(document.getElementById('tax').innerText);
  var total = document.getElementById('total').innerText;
  var totalNumber = parseFloat(total);
  document.getElementById('total').innerText = subtotalNumber + taxNumber;

};


var bookingBtn = document.getElementById('book-now');
bookingBtn.addEventListener('click', function(){
  var firstTicketQuantity = parseFloat(document.getElementById('first-class-quantity').value);
  var economyTicketQuantity = parseFloat(document.getElementById('economy-class-quantity').value);
  var total = parseFloat(document.getElementById('total').innerText);
  var alertContent = document.getElementById('alert-content');
  var successContent = document.getElementById('success');
  var totalTicket = firstTicketQuantity + economyTicketQuantity;
  if(total == 0){
      alertContent.style.display = 'block';
      setTimeout(function() {
        alertContent.style.display = 'none';
      }, 2000);
  }
  else{
    var string = 'You bought a total of ' + totalTicket  + ' ticket and the cost is $' + total;
    successContent.innerText = string;
    successContent.style.display = 'block';
    setTimeout(function() {
      successContent.style.display = 'none';
    }, 2500);
  }
})