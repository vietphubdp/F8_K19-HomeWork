const invoiceData = {
  meta: {
    invoiceNo: "WM-20260521-0001",
    saleDate: "2026/05/21",
    currency: "VND",
    paymentMethod: "Cash"
  },

  seller: {
    name: "WinMark 2 ba trung",
    address: "2 Ba trung - HN",
    phone: "012345678",
    representative: "Đại diện WinMark"
  },

  customer: {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Dong Ha noi"
  },

  items: [
    {
      no: 1,
      name: "Ao Thun",
      size: "XL",
      quantity: 1,
      price: 200000
    },
    {
      no: 2,
      name: "Ao Thun",
      size: "XL",
      quantity: 1,
      price: 200000
    }
  ],

  promotion: {
    description: "Khuyến mãi 50% dành cho khách hàng thân thiết",
    discountPercent: 50
  }
};

function formatMoney(value) {
  return value.toLocaleString("vi-VN") + " đ";
}

function renderInvoice(data) {
  const root = document.getElementById("invoice-root");

  const subtotal = data.items.reduce(function(sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  const discount = subtotal * data.promotion.discountPercent / 100;
  const total = subtotal - discount;

  const invoice = document.createElement("div");
  invoice.className = "invoice";

  invoice.innerHTML = `
    <div class="header">
      <div class="logo">
        <div class="logo-box">WM</div>

        <div>
          <h2>${data.seller.name}</h2>
          <p class="muted">
            Cung cấp sản phẩm thời trang cao cấp & thiết kế độc quyền.
          </p>
        </div>
      </div>

      <div class="right">
        <div class="badge">HÓA ĐƠN BÁN LẺ</div>
        <p><b>Mã số:</b> ${data.meta.invoiceNo}</p>
        <p class="muted">Ngày bán: ${data.meta.saleDate}</p>
      </div>
    </div>

    <hr />

    <div class="info">
      <div>
        <h4>Đơn vị bán hàng (Seller)</h4>
        <p class="bold">${data.seller.name}</p>
        <p class="muted">📍 ${data.seller.address}</p>
        <p class="muted">📞 ${data.seller.phone}</p>
      </div>

      <div>
        <h4>Khách hàng (Buyer)</h4>
        <p class="bold">${data.customer.name}</p>
        <p class="muted">Tuổi: ${data.customer.age}</p>
        <p class="muted">📍 ${data.customer.address}</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên sản phẩm</th>
          <th>Size</th>
          <th>SL</th>
          <th class="right">Đơn giá</th>
          <th class="right">Thành tiền</th>
        </tr>
      </thead>

      <tbody id="items-body"></tbody>
    </table>

    <hr />

    <div class="summary">
      <div class="promotion">
        <p class="green">KHUYẾN MÃI / TRỢ GIÁ</p>
        <p>${data.promotion.description}</p>
      </div>

      <div class="total-box">
        <div class="total-row">
          <span>Cộng tiền hàng:</span>
          <b>${formatMoney(subtotal)}</b>
        </div>

        <div class="total-row green">
          <span>Khấu trừ giảm giá:</span>
          <span>-${formatMoney(discount)}</span>
        </div>

        <div class="total-row final">
          <span>Tổng thanh toán:</span>
          <span class="green">${formatMoney(total)}</span>
        </div>
      </div>
    </div>
  `;

  root.appendChild(invoice);

  const tbody = document.getElementById("items-body");

  data.items.forEach(function(item) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.no}</td>
      <td class="bold">${item.name}</td>
      <td>${item.size}</td>
      <td class="bold">${item.quantity}</td>
      <td class="right">${formatMoney(item.price)}</td>
      <td class="right bold">${formatMoney(item.price * item.quantity)}</td>
    `;

    tbody.appendChild(tr);
  });
}

renderInvoice(invoiceData);