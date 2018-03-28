var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName=item
 var itemPrice=Math.floor(Math.random()*10+1)
 var obj={ [itemName]: itemPrice}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(!getCart().length)
    console.log("Your shopping cart is empty.")

  else {
    var array=[]
    for(var i=0;i<getCart().length;i++)
    {
      array.push(`${Object.keys(cart[i])} at $${getCart()[i]['itemName']}`)
    }

    console.log(`In your cart, you have ${array.join("and")}.`)
  }
}

function total() {
  // write your code here
  var total=0;

  for(var i=0;i<getCart().length;i++)
  {
    total+=getCart()[i]["itemName"];
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  if(!cart.hasOwnProperty('item'))
    console.log('That item is not in your cart.')

  else
    delete cart['item']

  return cart

}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
  {
    console.log("Sorry, we don't have a credit card on file for you.");
  }

  else {
    console.log(`Your total cost is $${total()} and, which will be charged to the card ${cardNumber}.`);
    cart=[]
  }
}
