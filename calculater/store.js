document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});

const products = {
    1: { name: 'iPhone 13 Pro', price: 900, img: 'iphone-13-pro-graphite-revibe_4d15b9b0-90f5-41ce-bf10-c8c8c23dc9be.webp' },
    2: { name: 'Headset', price: 150, img: 'Headphone-Zone-Sony-WH-CH720N-19.webp' },
    3: { name: 'Keyboard', price: 60, img: 'download.jfif' }
};

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        cart[productId].quantity++;
    } else {
        cart[productId] = {
            name: products[productId].name,
            price: products[productId].price,
            quantity: 1,
            img: products[productId].img
        };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    for (let id in cart) {
        let item = cart[id];
        let itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        itemRow.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;">
            <span>${item.name}</span>
            <div>
                <button onclick="updateQuantity(${id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${id}, 1)">+</button>
            </div>
            <span>${item.quantity * item.price} jd</span>
            <button onclick="removeFromCart(${id})">X</button>
        `;
        cartItems.appendChild(itemRow);
        totalPrice += item.quantity * item.price;
    }

    document.getElementById('total-price').innerText = totalPrice;
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        cart[productId].quantity += change;
        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        delete cart[productId];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function saveCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    sessionStorage.setItem('savedCart', JSON.stringify(cart));
    alert('Cart saved!');
}
