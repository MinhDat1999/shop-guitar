const dataitem = JSON.parse(localStorage.getItem("item"));
const pageProductButton = document.querySelector(
  ".product-item-right-info-contact button"
);
const pageProductImg = document.querySelector(".product-item-left-img img");
const pageProductName = document.querySelector(".product-item-right-info h1");
const pageProductPrice = document.querySelector(
  ".product-item-right-info span"
);
const ListImgdesc = document.querySelectorAll(
  ".product-item-right-info-contact-imgs img"
);

ListImgdesc.forEach((item) => {
  item.addEventListener("click", () => {
    pageProductImg.src = item.src;
  });
});
pageProductButton.addEventListener("click", () => {
  let checkProduct = true;
  console.log(valueoflist);
  valueoflist++;
  ListProduct.map((item) => {
    if (item.id == dataitem.id) {
      quatity = item.qutity;
      quatity++;
      item.qutity = quatity;
      checkProduct = false;
    }
  });
  if (checkProduct) {
    ListProduct.push({
      id: dataitem.id,
      name: dataitem.name,
      price: parseFloat(dataitem.price),
      img: dataitem.img,
      qutity: 1,
    });
  }
  valueitem.innerText = valueoflist;
  localStorage.setItem("Product", JSON.stringify([ListProduct, valueoflist]));
  addtoCart();
});
console.log(Math.floor(Math.random() * 10000));
console.log(ListProduct);
pageProductName.innerText = dataitem.name;
pageProductImg.src = dataitem.img;
pageProductPrice.innerText = `${dataitem.price}$`;
