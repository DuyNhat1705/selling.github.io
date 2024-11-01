let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    updateCartItems();
}

function updateCartItems() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = `Số sản phẩm trong giỏ: ${cartCount}`;
}

document.getElementById("checkout-button").addEventListener("click", function() {
    alert("Bạn đã chọn thanh toán. Số lượng sản phẩm: " + cartCount);
    cartCount = 0;
    document.getElementById("cart-count").innerText = cartCount;
    updateCartItems();
});
