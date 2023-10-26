const cartItems = [];
function addToCart(product) {
    const existingItem = cartItems.find(item => item.product ===
        product);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ product, quantity: 1 });
    }
    console.log(displayCart)
    displayCart();
}

//thêm
function displayCart() {
    const cartList = document.getElementById("cart-items").querySelector("ul");
    cartList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.product} - Số lượng: ${item.quantity}
        <button onclick="editCartItem('${item.product}')">Sửa</button>
        <button onclick="removeFromCart('${item.product}')">Xóa</button>`;
        cartList.appendChild(li);

    })
}
//xóa
function removeFromCart(product) {
    const itemIndex = cartItems.findIndex(item => item.product === product);
    if (itemIndex !== -1) {
        if (cartItems[itemIndex].quantity > 1) {
            cartItems[itemIndex].quantity--;
        } else {
            cartItems.splice(itemIndex, 1);
        }
        displayCart();
    }
}

//sửa 
function updateTotalPrice() {
    const totalPrice = cartItems.reduce((total, item) => total + 
    (item.quantity * 10), 0); // Giá của mỗi sản phẩm là $10 (đây là giá ảo).
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Tổng giá tiền: $${totalPrice}`;
    }
function placeOrder() {
    const orderDetailsList = document.getElementById("orderDetails");
    orderDetailsList.innerHTML = "";
    // Tạo danh sách sản phẩm đã đặt hàng và tính tổng giá tiền
    let totalPrice = 0;
    cartItems.forEach(item => {
    const row = document.createElement("tr");
    const productNameCell = document.createElement("td");
    productNameCell.textContent = item.product;
    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    const priceCell = document.createElement("td");
    const itemPrice = item.quantity * 10;
    priceCell.textContent = `$${itemPrice}`;
    row.appendChild(productNameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    orderDetailsList.appendChild(row);
    totalPrice += itemPrice;
    });
    // Hiển thị thông báo về đặt hàng
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.style.display = "block";
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Tổng giá tiền: $${totalPrice}`;
    }
    function editCartItem(product) {
    const itemToEdit = cartItems.find(item => item.product === product);
    if (itemToEdit) {
    const updatedQuantity = parseInt(prompt(`Nhập số lượng mới cho 
    ${product}:`), 10);
    if (!isNaN(updatedQuantity) && updatedQuantity >= 0) {
    itemToEdit.quantity = updatedQuantity;
    displayCart();
    placeOrder();
    } else {
    alert("Số lượng không hợp lệ.");
    }
    }
    }
