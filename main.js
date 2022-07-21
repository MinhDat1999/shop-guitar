const bariconEl = document.querySelector(".bar-icon");
const mobileNavEl = document.querySelector(".menu-mobile");
const closeIconEl = document.querySelectorAll(".close");
const BtnOpenCart = document.querySelector(".btn-cart");
const ListCartEl = document.querySelector(".list-cart");
const BtnAddCartEl = document.querySelectorAll(".btn-buynow");
const BtnPlusquatity = document.querySelector(".btnplus");
const BtnMinusquatity = document.querySelector(".btnminus");
const valueitem = document.querySelector(".cart-value span");
const innerquatity = document.querySelectorAll(".innerquatity");
const countPrice = document.querySelector(".countprice");
const ItemProduct = document.querySelectorAll(".all img ");
const btnaddbill = document.querySelector(".btn-add-bill");

let ListProduct;
let valueoflist = 0;
let quatity = 0;

ItemProduct.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const nameItem =
      e.target.parentElement.querySelector(".product-name").innerText;
    const piceItem =
      e.target.parentElement.querySelector(".product-price").innerText;
    const urlItem = e.target.parentElement.querySelector("img").src;
    const infoItem = {
      id: index,
      name: nameItem,
      price: parseFloat(piceItem),
      img: urlItem,
      qutity: quatity,
    };
    console.log(infoItem);
    localStorage.setItem("item", JSON.stringify(infoItem));
    window.location.href = "poduct.html";
  });
});
const datacart = JSON.parse(localStorage.getItem("Product"));
console.log(datacart);
if (datacart == null) {
  ListProduct = [];
} else {
  ListProduct = datacart[0];
  if (datacart[1] >= 0) {
    valueoflist = datacart[1];
  }
  console.log("ass");
  valueitem.innerText = valueoflist;
}
console.log(ListProduct);
let ArryPrice = [];
let Total = 0;

let quatityProduct = 0;

BtnAddCartEl.forEach((item, index) => {
  
  item.addEventListener("click", (e) => {
    let checkProduct = true;
    const itemAdd = e.target.parentElement;
    const NameProduct = itemAdd.querySelector(".product-name").innerText;
    const PriceProduct = itemAdd.querySelector(".product-price").innerText;
    const ImgProduct = itemAdd.querySelector("img").src;

    valueoflist++;
    console.log(index);
    valueitem.innerText = valueoflist;
    const infoProduct = {
      id: index,
      name: NameProduct,
      price: parseFloat(PriceProduct),
      img: ImgProduct,
      qutity: 1,
    };

    ListProduct.map((item,index) => {
      if (item.id == infoProduct.id) {
        quatity = item.qutity;
        quatity++;
        item.qutity = quatity;
        ListProduct[index].price =
          ListProduct[index].price * ListProduct[index].qutity;
        checkProduct = false;
      }
    });
    if (checkProduct) {
      ListProduct.push(infoProduct);
    }

    console.log(infoProduct);

    console.log(ListProduct);
    localStorage.setItem("Product", JSON.stringify([ListProduct, valueoflist]));
    addtoCart();
  });
});
btnaddbill.addEventListener("click", (e) => {
  localStorage.setItem("Bill", JSON.stringify([ListProduct, countSumPrice()]));
});
const Changequatity = (event, index) => {
  const WhatBtn = event.target.getAttribute("data");
  const newprice = ListProduct[index].price / ListProduct[index].qutity;
  if (WhatBtn === "plus") {
    ListProduct[index].qutity += 1;
    valueoflist += 1;
    ListProduct[index].price = newprice * ListProduct[index].qutity;
  } else {
    ListProduct[index].qutity -= 1;
    valueoflist -= 1;
    ListProduct[index].price = newprice * ListProduct[index].qutity;
  }
  if (ListProduct[index].qutity < 1) {
    ListProduct.splice(index, 1);
  }

  valueitem.innerText = valueoflist;
  localStorage.setItem("Product", JSON.stringify([ListProduct, valueoflist]));
  addtoCart();
};

const handleDeleteProduct = (quatity, index) => {
  valueoflist = valueoflist - quatity;
  ListProduct.splice(index, 1);

  valueitem.innerText = valueoflist;
  localStorage.setItem("Product", JSON.stringify([ListProduct, valueoflist]));
  addtoCart();
};
const countSumPrice = () => {
  let sum = 0;
  ListProduct.forEach((item) => {
    sum += item.price;
  });
  return sum;
};
const addtoCart = (info) => {
  let div = "";
  ListProduct.map((item, index) => {
    div += `<div class="item-adding row">
      <img
        class="item-adding-img col l-4 c-4 m-4"
        src="${item.img}"
        alt=""
      />
      <div class="inforproduct col l-6 c-6 m-6">
        <h5>${item.name}</h5>
        <h6><span>${item.price}</span>$</h6>
        <div class="quatitychange">
        <i onclick="Changequatity(event,${index})" data="plus" class="btnplus fa-solid fa-plus"></i>
        <span class="innerquatity">${item.qutity}</span>
      <i  onclick="Changequatity(event,${index})" data="minus" class="btnminus fa-solid fa-minus"></i>
        </div>
      </div>
      <i onclick="handleDeleteProduct(${item.qutity},${index})" class="fa fa-trash col l-2 c-2 m-2"></i>
    </div>
    </div>
    </div>`;
  });
  //   let divItem = document.createElement("div");
  //   const divContent = `<div class="item-adding row">
  //   <img
  //     class="item-adding-img col l-3"
  //     src="${info.img}"
  //     alt=""
  //   />
  //   <div class="inforproduct col l-7">
  //     <h6>${info.name}</h6>
  //     <span>${info.price}</span>
  //     <input value="${info.qutity}" type="number" min="0" max="10" />
  //   </div>
  //   <i class="fa fa-trash col l-2"></i>
  // </div>
  // </div>

  // </div>`;
  const cartbody = document.querySelector(".list-cart-body");
  cartbody.innerHTML = div;
  countPrice.innerText = countSumPrice();

  //   cartbody.appendChild(divItem);
};
addtoCart();
closeIconEl.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log(index);
    switch (index) {
      case 0:
        mobileNavEl.classList.remove("silde");
        break;
      case 1:
        ListCartEl.classList.remove("silde");
        break;

      default:
        break;
    }
  });
});
bariconEl.addEventListener("click", () => {
  mobileNavEl.classList.toggle("silde");
});
BtnOpenCart.addEventListener("click", () => {
  ListCartEl.classList.toggle("silde");
});
