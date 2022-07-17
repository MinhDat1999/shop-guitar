const data = JSON.parse(localStorage.getItem("Bill"));
const total = document.querySelector(".subtoal-value");
const findtotal = document.querySelector(".final-total-value");
const BtnPayEl = document.querySelector(".btn-pay");
console.log(data);
let carttt = document.querySelector(".list-cart-body-pay");
const CloseOder = document.querySelector(".closeOder");
const fromoder = document.querySelector(".model");
const fromTypepay = document.querySelectorAll(".type-pay-item input");
const btnOkEl = document.querySelector(".model-footer button");
CloseOder.addEventListener("click", () => {
  fromoder.classList.remove("hiden");
});
let Isfullinfo = false;
let typepay;
fromTypepay.forEach((item) => {
  item.addEventListener("change", () => {
    typepay = item.value;
  });
});
total.innerText = `${data[1]}$`;
findtotal.innerText = `${data[1]}$`;
btnOkEl.addEventListener("click", () => {
  alert("Order Sucess");

  return;
});
BtnPayEl.addEventListener("click", () => {
  const formPay = document.querySelectorAll(".tb-dk input");
  console.log(fromoder);

  console.log(formPay);
  const dataPay = {
    name: formPay[0].value,
    phone: formPay[1].value,
    country: formPay[2].value,
    district: formPay[3].value,
    wards: formPay[4].value,
    address: formPay[5].value,  };
  if (
    dataPay.name == "" ||
    dataPay.phone == "" ||
    dataPay.country == "" ||
    dataPay.district == "" ||
    dataPay.wards == "" ||
    dataPay.address == ""
  ) {
    alert("Nhập đủ thông tin");
  } else {
    fromoder.classList.add("hiden");
    const ModalBody = document.createElement("div");
    ModalBody.innerHTML = `<div>
  <p>Name: <span> ${dataPay.name}</span></p>
  <p>Phone: <span>${dataPay.phone}</span> </p>
  <p>Country:<span>${dataPay.country}</span> </p>
  <p>District: <span>${dataPay.district}</span> </p>
  <p>Wards: <span>${dataPay.wards}</span> </p>
  <p>Adress: <span>${dataPay.address}</span> </p>
  <p>Total: <span>${data[1]}</span> </p>
  </div>`;
    const divBody = document.querySelector(".model-body");
    divBody.appendChild(ModalBody);
  }
});
const addtoCart1 = (info) => {
  let tr = "";
  data[0].map((item, index) => {
    tr += ` <tr>
    <div class="product-item-pay">
  <div class="product-item-pay-left">
    <img src="${item.img}" alt="" />
  </div>
  <div class="product-item-pay-right">
    <h4>${item.name}</h4>
    <p>${item.price}$</p>
    <p>${item.qutity}</p>
  </div>
  
</div>
  </div>

  </tr>`;
  });

  const tableproduct = document.querySelector(".tb-product-body");
  tableproduct.innerHTML = tr;

  //   cartbody.appendChild(divItem);
};
addtoCart1();

console.log(data);
