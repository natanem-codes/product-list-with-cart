window.addEventListener("load", () => {
  console.log("loaded");
});

const sectionContainerEl = document.querySelector(".section-container");

const createCardEl = ({ image, name, price, category }) => {
  let img = `/${image.desktop}`;
  console.log(img);
  return `
         <div class="card">
            <div class="card-img">
              <img src=${img} alt="" />
            </div>
            <div class="add-to-cart-btn">
              <img
                class="cart-icon"
                src="../assets/images/icon-add-to-cart.svg"
                alt="add to cart button"
              />
              Add to Cart
            </div>
            <div class="card-info">
              <p class="card-category">${category}</p>
              <h4 class="card-name">${name}</h4>
              <p class="card-price">$${price}</p>
            </div>
          </div>
    `;
};

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let item of data) {
      console.log(item);
      sectionContainerEl.innerHTML += createCardEl(item);
    }
  });
