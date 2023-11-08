document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.querySelector(".cart-items");
    const totalPrice = document.querySelector("#total-price");

    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseFloat(button.getAttribute("data-price"));
            
            const cartItem = document.createElement("li");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <span>${productName}</span>
                <span>$${productPrice.toFixed(2)}</span>
                <button class="remove-from-cart">Remove</button>
            `;
            
            cartItems.appendChild(cartItem);
            
            cartTotal += productPrice;
            totalPrice.textContent = cartTotal.toFixed(2);
            
            const removeButtons = document.querySelectorAll(".remove-from-cart");
            removeButtons.forEach(removeButton => {
                removeButton.addEventListener("click", () => {
                    const itemToRemove = removeButton.parentElement;
                    const priceToRemove = parseFloat(itemToRemove.querySelector("span:last-child").textContent.slice(1));
                    
                    cartItems.removeChild(itemToRemove);
                    cartTotal -= priceToRemove;
                    totalPrice.textContent = cartTotal.toFixed(2);
                });
            });
        });
    });
});
