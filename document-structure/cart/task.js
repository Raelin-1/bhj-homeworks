document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartProducts = document.querySelector('.cart__products');

    products.forEach(product => {
        const quantityValue = product.querySelector('.product__quantity-value');
        const quantityControls = product.querySelectorAll('.product__quantity-control');

        quantityControls.forEach(control => {
            control.addEventListener('click', () => {
                let currentValue = parseInt(quantityValue.textContent);

                if (control.classList.contains('product__quantity-control_inc')) {
                    quantityValue.textContent = currentValue + 1;
                } else if (control.classList.contains('product__quantity-control_dec')) {
                    if (currentValue > 1) {
                        quantityValue.textContent = currentValue - 1;
                    }
                }
            });
        });

        // Function to add product to cart
        const addButton = product.querySelector('.product__add');
        addButton.addEventListener('click', () => {
            const productId = product.getAttribute('data-id');
            const productImage = product.querySelector('.product__image').src;
            const productQuantity = parseInt(quantityValue.textContent);

            // Check if product already in cart
            let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + productQuantity;
            } else {
                // Create new product in cart
                const cartProduct = document.createElement('div');
                cartProduct.className = 'cart__product';
                cartProduct.setAttribute('data-id', productId);

                const cartProductImage = document.createElement('img');
                cartProductImage.className = 'cart__product-image';
                cartProductImage.src = productImage;

                const cartProductCount = document.createElement('div');
                cartProductCount.className = 'cart__product-count';
                cartProductCount.textContent = productQuantity;

                cartProduct.appendChild(cartProductImage);
                cartProduct.appendChild(cartProductCount);
                cartProducts.appendChild(cartProduct);
            }
        });
    });
});
