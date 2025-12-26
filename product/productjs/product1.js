const productsPerPage = 8;
let currentPage = 1;

function renderProducts(products) {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const visibleProducts = products.slice(start, end);

  const container = document.getElementById("productGrid");
  container.innerHTML = "";

  visibleProducts.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <div class="product-img-inside">
            <img src="${p.img}" alt="${p.name}">
        </div>
        <h3 class="product-heading">${p.name}</h3>
      </div>
    `;
  });
}

function renderPagination(products) {
  const pageCount = Math.ceil(products.length / productsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = i === currentPage ? 'active' : '';
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts(products);
      renderPagination(products);
    });
    pagination.appendChild(btn);
  }
}

function initProductPage(products) {
  renderProducts(products);
  renderPagination(products);
}
