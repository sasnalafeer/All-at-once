let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    if (cartList) {
        cartList.innerHTML = "";
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = item;
            cartList.appendChild(li);
        });
    }
}

function checkout() {
    alert("Proceeding to checkout...");
}

function placeOrder() {
    alert("Order placed successfully!");
}
