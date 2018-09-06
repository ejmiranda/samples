let list = document.querySelector(`ul`);
let totalBox = document.querySelector(`p`);
let total = 0;
list.innerHTML = ``;
totalBox.textContent = ``;
let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (let i = 0; i < products.length; i++) {
  let product = products[i].split(`:`);
  let productName = product[0];
  let productPrice = +product[1];

  total += productPrice;
  
  itemText = `${productName} - \$${productPrice}`;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: \$${total.toFixed(2)}`;