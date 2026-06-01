const productsEl = document.getElementById("products");
const categoriesEl = document.getElementById("categories");
const totalProductEl = document.getElementById("totalProduct");
const cartCountEl = document.getElementById("cartCount");

let products = [];
let cartCount = 0;

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();

    renderProducts(products);
    renderCategories(products);
  } catch (error) {
    console.log(error);
  }
}

function renderProducts(list) {
  productsEl.innerHTML = "";

  totalProductEl.textContent = `Hiển thị ${list.length} sản phẩm`;

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <span class="category-label">${formatCategory(product.category)}</span>

      <img
        src="${product.image}"
        alt="${product.title}"
        class="product-img"
      />

      <div class="product-info">
        <h3>${product.title}</h3>

        <div class="rating">
          ★ ${product.rating.rate}
          <span>(${product.rating.count})</span>
        </div>

        <div class="bottom">
          <div class="price">$${product.price}</div>

          <button
            class="add-cart"
            title="Thêm vào giỏ hàng"
          >
            🛒
          </button>
        </div>
      </div>
    `;

    const addBtn = card.querySelector(".add-cart");

    addBtn.addEventListener("click", () => {
      cartCount++;

      cartCountEl.textContent = cartCount;
      cartCountEl.style.display = "inline-block";
    });

    productsEl.appendChild(card);
  });
}

function renderCategories(list) {
  const categories = [
    "Tất cả sản phẩm",
    ...new Set(list.map((item) => item.category)),
  ];

  categoriesEl.innerHTML = "";

  categories.forEach((category, index) => {
    const div = document.createElement("div");

    div.className = index === 0 ? "category active" : "category";

    const count =
      category === "Tất cả sản phẩm"
        ? list.length
        : list.filter((item) => item.category === category).length;

    div.innerHTML = `
      <span>${formatCategory(category)}</span>
      <span>${count}</span>
    `;

    div.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach((item) => {
        item.classList.remove("active");
      });

      div.classList.add("active");

      if (category === "Tất cả sản phẩm") {
        renderProducts(products);
      } else {
        const filteredProducts = products.filter(
          (item) => item.category === category,
        );

        renderProducts(filteredProducts);
      }
    });

    categoriesEl.appendChild(div);
  });
}

function formatCategory(category) {
  switch (category) {
    case "men's clothing":
      return "Men's clothing";

    case "women's clothing":
      return "Women's clothing";

    case "jewelery":
      return "Jewelery";

    case "electronics":
      return "Electronics";

    default:
      return category;
  }
}

getProducts();
