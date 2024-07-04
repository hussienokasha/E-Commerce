let boxes = Array.from(document.querySelectorAll(".box"));
let boxImgs = Array.from(document.querySelectorAll(".box img"));
spLink = document.querySelector(".sp-link");
let productName = Array.from(document.querySelectorAll(".box .product_name"));
let productCost = Array.from(document.querySelectorAll(".box .product_cost"));
let carts = Array.from(document.querySelectorAll(".cart"));

let products = [
  { name: "product 1", cost: "$70", imgSrc: "img/products/f1.jpg", id: 1 },
  { name: "product 2", cost: "$50", imgSrc: "img/products/f1.jpg", id: 2 },
  { name: "product 3", cost: "$40", imgSrc: "img/products/f1.jpg", id: 3 },
  { name: "product 4", cost: "$20", imgSrc: "img/products/f1.jpg", id: 4 },
  { name: "product 5", cost: "$80", imgSrc: "img/products/f1.jpg", id: 5 },
  { name: "product 6", cost: "$30", imgSrc: "img/products/f1.jpg", id: 6 },
  { name: "product 7", cost: "$73", imgSrc: "img/products/f1.jpg", id: 7 },
  { name: "product 8", cost: "$75", imgSrc: "img/products/f1.jpg", id: 8 },
  { name: "product 9", cost: "$76", imgSrc: "img/products/f1.jpg", id: 9 },
  { name: "product 10", cost: "$72", imgSrc: "img/products/f1.jpg", id: 10 },
  { name: "product 11", cost: "$71", imgSrc: "img/products/f1.jpg", id: 11 },
  { name: "product 12", cost: "$80", imgSrc: "img/products/f1.jpg", id: 12 },
  { name: "product 13", cost: "$90", imgSrc: "img/products/f1.jpg", id: 13 },
  { name: "product 14", cost: "$100", imgSrc: "img/products/f1.jpg", id: 14 },
  { name: "product 15", cost: "$110", imgSrc: "img/products/f1.jpg", id: 15 },
  { name: "product 16", cost: "$120", imgSrc: "img/products/f1.jpg", id: 16 },
];

productCost.forEach((p, i) => {
  p.innerHTML = products[i].cost;
});

productName.forEach((pr, i) => {
  pr.innerHTML = products[i].name;
});

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    let target = e.target;
    console.log(target);
    localStorage.setItem("imgSrc", target.getAttribute("src"));
    spLink.click();
  });
});
window.onload=()=>{

  if (location.pathname.includes("sproduct.html")) {
    let sproductImg = document.querySelector(".sproduct-img");
    sproductImg.setAttribute("src", localStorage.getItem("imgSrc"));
  }
}
