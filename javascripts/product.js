var products = [
  {
    "id": 1,
    "name": "Product 1",
    "img": '../images/products/item1.png',
    "price": 100000
  },
  {
    "id": 2,
    "name": "Product 2",
    "img": '../images/products/item2.png',
    "price": 200000
  },
  {
    "id": 3,
    "name": "Product 3",
    "img": '../images/products/item3.png',
    "price": 300000
  },
  {
    "id": 4,
    "name": "Product 4",
    "img": '../images/products/item4.png',
    "price": 350000
  },
  {
    "id": 5,
    "name": "Product 5",
    "img": '../images/products/item5.png',
    "price": 700000
  },
  {
    "id": 6,
    "name": "Product 6",
    "img": '../images/products/item6.png',
    "price": 250000
  },
  {
    "id": 7,
    "name": "Product 7",
    "img": '../images/products/item7.png',
    "price": 400000
  },
  {
    "id": 8,
    "name": "Product 8",
    "img": '../images/products/item8.png',
    "price": 60000
  },
];
localStorage.setItem("products", JSON.stringify(products));
var checkCart = localStorage.getItem("cart");
var checkCartNumber = localStorage.getItem("cartNumber");
if (checkCart == null)  
localStorage.setItem("cart", "[]");
if (checkCartNumber == null)  
localStorage.setItem("cartNumber", "0");

function getProductList(products) {
  var lenProducts = products.length;
  var items = '';
  for (var i = 0 ; i < lenProducts; i++) { 
    items += `<li id=item${products[i].id} class="product-item">
                <div class="item-content">
                  <img class="item-img" src="${products[i].img}" alt="Item-${products[i].id}">
                  <h3 class="item-heading">${products[i].name}</h3>
                  <p class="item-price">${Intl.NumberFormat().format(products[i].price) + '$'}</p>
                  <button class="add-to-cart">Add to cart</button>
                </div>
              </li>`; 
  }
  return items;
}
function addEventAddToCart(products) {
  products.forEach(function(item) {
    var btn = document.getElementById('item'+item.id).getElementsByTagName('button')[0];
    btn.addEventListener('click', function() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var cartNumber = localStorage.getItem('cartNumber');
    var currentIdItem = cart.length < 1 ? -1 : cart.map(function(d) {
    return d['id']; }).indexOf(item.id);
    currentIdItem > -1 ? cart[currentIdItem].quantity += 1 : cart.push({"id": item.id, "quantity": 1});
     document.getElementsByClassName('cart-number')[0].innerHTML = parseInt(cartNumber) + 1;
    localStorage.setItem("cartNumber", parseInt(cartNumber) + 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
}
function addEventHoverToCurrentItem(products) {
  products.forEach(function(item) {
    var currentItem = document.getElementById('item'+item.id);
    currentItem.addEventListener('mouseover', function(event) {
    currentItem.getElementsByTagName('button')[0].style.visibility = 'visible';
    });
    currentItem.addEventListener('mouseleave', function(event) {
    currentItem.getElementsByTagName('button')[0].style.visibility = 'hidden';
    });
  })
}
function getCartItem(cart) {
  var lenCart = cart.length;
  var items = `<tr>
                 <th class="cart-heading">Product</th>   
                 <th class="cart-heading">Quantity</th>   
                 <th class="cart-heading">Action</th>   
               </tr>`;
  for (var i = 0 ; i < lenCart; i ++) {
    var currentProductIndex = products.map(function(d) {
      return d['id']; }).indexOf(cart[i].id);
    var currentProduct = products[currentProductIndex];
    items += `<tr class="cart-item" id="product-${i}">
                <td class="item-product">
                  <img src="${currentProduct.img}" alt="Item-${currentProduct.id}">
                  <h3 class=product-heading>${currentProduct.name}</h3>
                  <p class=product-price>${Intl.NumberFormat().format(currentProduct.price) + '$'}</p>
                </td>
                <td class="item-quantity">${cart[i].quantity}</td>
                <td class="item-action">
                  <span class="remove-logo">
                  </span>
                </td>
              </tr>`;
  }
  return items;
}
function addEventRemoveFromCart(cart) {
  cart.forEach(function(product, index) {
    var currentProduct = document.getElementById('product-' + index);
    var btnRemove = currentProduct.getElementsByTagName('span')[0];
    btnRemove.addEventListener('click', function() {
      if (confirm('Are you sure!')) {
        currentProduct.remove();
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        var cartNumber = localStorage.getItem("cartNumber");
        var currentCartNumber = parseInt(cartNumber) - parseInt(product.quantity);
        document.getElementsByClassName('cart-number')[0].innerHTML = currentCartNumber;
        localStorage.setItem("cartNumber", currentCartNumber);
      } 
    });
  });
}
function getCartNumber() {
  var cartNumber = localStorage.getItem('cartNumber');
  document.getElementsByClassName('cart-number')[0].innerHTML = cartNumber;
}
getCartNumber();
var path = location.pathname;

// Check current pathname to process
if (path === '/media/top/TOP%20G/AsianTech/HTML/ex1/product/product.html') {
  document.getElementById('products1').innerHTML = getProductList(products);
  addEventAddToCart(products); 
  addEventHoverToCurrentItem(products);
} else {
  var cart = JSON.parse(localStorage.getItem("cart"));
  document.getElementById('cart-list').innerHTML = getCartItem(cart);
  addEventRemoveFromCart(cart);
}
