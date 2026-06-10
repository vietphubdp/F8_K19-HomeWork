const API_URL = "http://localhost:3000/customers";

let editingId = null;

const table = document.getElementById("customerTable");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

const nameInput = document.getElementById("name");
const taxInput = document.getElementById("tax");
const addressInput = document.getElementById("address");
const searchInput = document.getElementById("searchInput");

const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const saveBtn = document.getElementById("saveBtn");

async function getCustomers() {
  const res = await fetch(API_URL);
  const customers = await res.json();

  renderTable(customers);
}

function renderTable(customers) {
  table.innerHTML = "";

  customers.forEach((customer) => {
    table.innerHTML += `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.address}</td>
                <td>${customer.tax}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editCustomer('${customer.id}')">
                        Edit
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteCustomer('${customer.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
  });
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  clearForm();
}

function clearForm() {
  nameInput.value = "";
  taxInput.value = "";
  addressInput.value = "";
  editingId = null;
}

addBtn.onclick = function () {
  modalTitle.innerText = "Add customer";
  clearForm();
  openModal();
};

closeBtn.onclick = closeModal;

saveBtn.onclick = async function () {
  const name = nameInput.value.trim();
  const tax = taxInput.value.trim();
  const address = addressInput.value.trim();

  if (name === "" || tax === "" || address === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  const customerData = {
    name,
    tax,
    address,
  };

  if (editingId === null) {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });
  } else {
    await fetch(`${API_URL}/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });
  }

  closeModal();
  getCustomers();
};

async function editCustomer(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const customer = await res.json();

  editingId = id;
  modalTitle.innerText = "Edit customer";

  nameInput.value = customer.name;
  taxInput.value = customer.tax;
  addressInput.value = customer.address;

  openModal();
}

async function deleteCustomer(id) {
  const confirmDelete = confirm("Bạn có chắc muốn xóa customer này không?");

  if (confirmDelete) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    getCustomers();
  }
}

searchInput.oninput = async function () {
  const keyword = searchInput.value.trim();

  const res = await fetch(`${API_URL}?q=${keyword}`);
  const customers = await res.json();

  renderTable(customers);
};

getCustomers();
