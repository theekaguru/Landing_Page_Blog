const specificProducts = [
    { name: "Overview" }, // Removed link property
    { name: "Pricing" },
    { name: "Marketplace" },
    { name: "Features" },
    { name: "Integrations" }
];

function populateProductDropdown() {
    const productDropdownContent = document.getElementById('productDropdownContent');
    if (productDropdownContent) {
        let productsHtml = '';
        specificProducts.forEach(product => {
            // Changed from <a> to <div>
            productsHtml += `<div>${product.name}</div>`;
        });
        productDropdownContent.innerHTML = productsHtml;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductDropdown();

    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }
});

function toggleMenu() {
    const nav = document.querySelector('.topbar nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}