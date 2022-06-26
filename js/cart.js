// Change quantity of cart
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');

function changeAmount() {
    for (let i = 0; i < incrementBtn.length; i++) {
        incrementBtn[i].addEventListener('click', function () {
            let increment = Number(this.previousElementSibling.innerText);
            increment++;
            this.previousElementSibling.innerText = increment;
            updateCartTotal();
        });
        decrementBtn[i].addEventListener('click', function () {
            let decrement = Number(this.nextElementSibling.innerText);
            decrement <= 0 ? 1 : decrement--;
            this.nextElementSibling.innerText = decrement;
            updateCartTotal();
        });
    }
}
changeAmount();

const removeCartItem = document.querySelectorAll('.delete');

for (let i = 0; i < removeCartItem.length; i++) {
    removeCartItem[i].addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
    });
};

function updateCartTotal() {
    var cartItem = document.querySelectorAll('.cart-item');
    // console.log(cartItem);
    var total = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let price = cartItem[i].querySelector('.price');
        // console.log(price);
        let quantity = cartItem[i].querySelector('.quantity').innerText.replace('đ', '');
        // console.log(quantity);
        total += Number(price) * Number(quantity);
    }
    document.getElementsByClassName('totalPrice')[0].innerText = '$' + total.toFixed(2);
}