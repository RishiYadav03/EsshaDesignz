const productsPerPage = 8;
let currentPage = 1;

// ✅ Render Header Section with Title and Background Image
function renderPageHeader(title, bannerImage) {
  const sectionHTML = `
      <div class="main-title-section-container">
        <div class="container">
          <div class="main-title-section"><h1 class="codewhite" style="    font-family: var(--wdtFontTypo_Alt);">${title}</h1></div>
          <div class="breadcrumb">
            <a href="../index.html" class="codewhite">Home</a>
            <span class="elementor-icon-list-icon codewhite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="heightweight">
                <path d="M50,99L1,50L50,1l49,49L50,99z"></path>
              </svg>
            </span>
            <span class="current codewhite">Products</span>
            <span class="elementor-icon-list-icon codewhite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="heightweight">
                <path d="M50,99L1,50L50,1l49,49L50,99z"></path>
              </svg>
            </span>
            <span class="current codewhite">${title}</span>
          </div>
        </div>
      </div>
      <div class="main-title-section-bg" style="background-image: url(${bannerImage});"></div>
  `;
  const main = document.getElementById("breadcrum");
  if (breadcrum) {
  breadcrum.innerHTML = sectionHTML;
  }
}

// ✅ Render Product Cards
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

// ✅ Render Pagination
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

// ✅ Initialize Page
function initProductPage(products, title, bannerImage) {
  // insertMainStructure();                    // 1. Create structure
  renderPageHeader(title, bannerImage);     // 2. Inject header + breadcrumb
  renderProducts(products);                 // 3. Load initial products
  renderPagination(products);               // 4. Add pagination
}
