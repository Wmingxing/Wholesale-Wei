// ==================== 购物车及阶梯折扣核心逻辑 (js/cart.js) ====================

// 1. 切换购物车抽屉的显示与隐藏
function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}

// 2. 添加商品到购物车
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('my_cart')) || [];
    
    // 检查购物车中是否已经存在相同ID和尺寸的商品
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === product.size);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += (product.quantity || 1);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            size: product.size,
            img: product.img,
            quantity: product.quantity || 1
        });
    }
    
    localStorage.setItem('my_cart', JSON.stringify(cart));
    updateCartUI();
    toggleCartDrawer(); // 添加成功后自动打开购物车抽屉
}

// 3. 修改商品数量（加减）
function updateQuantity(index, delta) {
    let cart = JSON.parse(localStorage.getItem('my_cart')) || [];
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1); // 数量为0时直接删除
        }
        localStorage.setItem('my_cart', JSON.stringify(cart));
        updateCartUI();
    }
}

// 4. 核心：更新购物车界面、计算阶梯折扣与总价
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotalElem = document.getElementById('cart-subtotal');
    const cartDiscountedPriceElem = document.getElementById('cart-discounted-price');
    const cartDiscountNoticeElem = document.getElementById('cart-discount-notice');
    const cartCountElem = document.getElementById('cart-count');

    let cart = JSON.parse(localStorage.getItem('my_cart')) || [];

    // 更新顶部/导航栏的购物车商品总数角标
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElem) {
        cartCountElem.innerText = totalCount;
    }

    // 如果找不到容器（防止某些页面没引入抽屉报错），直接返回
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; color:#888; padding:30px;">Your cart is empty.</p>`;
        if (cartSubtotalElem) cartSubtotalElem.innerText = `$0.00`;
        if (cartDiscountedPriceElem) cartDiscountedPriceElem.innerText = `$0.00`;
        if (cartDiscountNoticeElem) cartDiscountNoticeElem.innerText = `Order $100+ for 4% OFF!`;
        return;
    }

    // 渲染购物车内的商品列表
    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item" style="display:flex; gap:12px; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #eee; align-items:center;">
            <img src="${item.img}" alt="${item.name}" style="width:60px; height:60px; object-fit:cover; border-radius:4px; background:#f9f9f9;">
            <div style="flex:1;">
                <div style="font-size:13px; font-weight:600; color:#111; margin-bottom:4px; line-height:1.2;">${item.name}</div>
                <div style="font-size:12px; color:#666; margin-bottom:4px;">Size: ${item.size}</div>
                <div style="font-size:13px; font-weight:800; color:#e63946;">$${item.price.toFixed(2)}</div>
                <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
                    <button onclick="updateQuantity(${index}, -1)" style="width:20px; height:20px; border:1px solid #ccc; background:#fff; cursor:pointer; font-weight:bold;">-</button>
                    <span style="font-size:13px; font-weight:600;">${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)" style="width:20px; height:20px; border:1px solid #ccc; background:#fff; cursor:pointer; font-weight:bold;">+</button>
                </div>
            </div>
        </div>
    `).join('');

    // 计算原价小计 (Subtotal)
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 阶梯折扣逻辑计算：
    // - 满 $100 且未满 $200: 96折 (4% OFF)
    // - 满 $200 且未满 $300: 94折 (6% OFF)
    // - 满 $300 及以上: 9折 (10% OFF)
    let discountRate = 1.0;
    let noticeText = "Order $100+ for 4% OFF!";

    if (subtotal >= 300) {
        discountRate = 0.90; // 9折
        noticeText = "🎉 You got 10% OFF (300+ Tier)!";
    } else if (subtotal >= 200) {
        discountRate = 0.94; // 94折
        noticeText = "🎉 You got 6% OFF! Add to $300 for 10% OFF!";
    } else if (subtotal >= 100) {
        discountRate = 0.96; // 96折
        noticeText = "🎉 You got 4% OFF! Add to $200 for 6% OFF!";
    }

    const discountedPrice = subtotal * discountRate;

    // 赋值到页面的对应 DOM 元素
    if (cartSubtotalElem) cartSubtotalElem.innerText = `$${subtotal.toFixed(2)}`;
    if (cartDiscountedPriceElem) cartDiscountedPriceElem.innerText = `$${discountedPrice.toFixed(2)}`;
    if (cartDiscountNoticeElem) cartDiscountNoticeElem.innerText = noticeText;
}

// 页面加载完成后自动刷新购物车状态（保持角标和总价同步）
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});