"use strict";

const showcase = document.querySelector(".showcase");
let sliderActiveImg;

const initializeSliderImg = () => {
  for (let img of imgSliderArr) {
    showcase.innerHTML += `<img src="${img.imgUrl}" class="d-none" alt="${img.title}" id="slider_id_${img.id}">`;
  }
  document.getElementById("slider_id_1").classList.remove("d-none");
  sliderActiveImg = 1;
};
initializeSliderImg();

const nextImgSlider = () => {
  if (sliderActiveImg + 1 <= imgSliderArr.length) {
    document
      .getElementById(`slider_id_${sliderActiveImg}`)
      .classList.add("d-none");
    sliderActiveImg++;

    document
      .getElementById(`slider_id_${sliderActiveImg}`)
      .classList.remove("d-none");
  }
};

const previousSlider = () => {
  if (sliderActiveImg > 0 && imgSliderArr.length <= sliderActiveImg) {
    document
      .getElementById(`slider_id_${sliderActiveImg}`)
      .classList.add("d-none");
    sliderActiveImg--;

    document
      .getElementById(`slider_id_${sliderActiveImg}`)
      .classList.remove("d-none");
  }
};

setInterval(() => {
  if (sliderActiveImg + 1 <= imgSliderArr.length) {
    nextImgSlider();
  } else if (sliderActiveImg > 0 && imgSliderArr.length <= sliderActiveImg) {
    previousSlider();
  }
}, 2500);

const deliveryDiv = document.querySelector(".info");

const initializeInfoDiv = () => {
  for (let item of deliveryInfoArr) {
    deliveryDiv.innerHTML += `
    <p>
          <i class="bi bi-${item.icon}"></i>${item.text}
        </p>`;
  }
};
initializeInfoDiv();

const categoriesDiv = document.querySelector(".grid-categories");

const initializeCatDiv = () => {
  for (let category of ShopCategoriesArr) {
    categoriesDiv.innerHTML += `
        <div class="${category.type}Box flexEnd fontSizeSmall bgSettings">
          <button type="button" class="btn-on-img">${category.btn1}</button>
          <button type="button" class="btn-on-img">${category.btn2}</button>
          <button type="button" class="btn-on-img">${category.btn3}</button>
        </div>
        `;
  }
};
initializeCatDiv();

const brandsDiv = document.querySelector(".grid-brands");

const initializeBrandsDiv = () => {
  for (let brand of brandsArr) {
    brandsDiv.innerHTML += `
        <img
        src="${brand.imgUrl}"
        alt="${brand.title}"
        />
        `;
  }
};
initializeBrandsDiv();

const ShopDiv = document.querySelector(".grid-shop");
const ShopRowDiv = document.querySelector(".row");
const ShopRowDiv2 = document.querySelector(".row2");
const ShopRowDiv3 = document.querySelector(".row3");

const initializeShopDiv = () => {
  for (let item of shopArr) {
    ShopRowDiv.innerHTML += `
    
          <div class="col bgSettings" id="block${item.id}"></div>
        `;
  }
};
const initializeShopDiv2 = () => {
  for (let item of shopArr2) {
    ShopRowDiv2.innerHTML += `
          <div class="col bgSettings" id="block${item.id}"></div>
        `;
  }
};
const initializeShopDiv3 = () => {
  for (let item of shopArr3) {
    ShopRowDiv3.innerHTML += `
          <div class="col-${item.wide} bgSettings" id="block${item.id}"></div>
        `;
  }
};
initializeShopDiv();
initializeShopDiv2();
initializeShopDiv3();

const descriptionDiv = document.querySelector(".desc");

const initializeDescDiv = () => {
  for (let desc of descArr) {
    descriptionDiv.innerHTML += `
        <h2>${desc.title}</h2>
        <p>
        ${desc.text}
        </p>
        `;
  }
};
initializeDescDiv();

const subscribeDiv = document.querySelector(".subscribe");

const initializeSubscribeDiv = () => {
  for (let item of subscribeArr) {
    subscribeDiv.innerHTML += `
        <h3>${item.title}</h3>
        <form>
        <div class="my-3">
        <input
        type="email"
        class="form-control container"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="YOUR EMAIL ADDRESS"
        />
        <button type="submit" class="btn my-3" id="submit">
        JOIN THE RIDE
        </button>
        <div id="emailHelp" class="form-text">
        ${item.privacyPolicyText}
        </div>
        </div>
        </form>
        <div class="trustPilot mt-5">
        <img
        src="${item.imgUrl}"
        alt="TrustPilot"
        />
        <p>${item.trustPilotText}</p>
        </div>
        <span id="rights">all rights reserved to Reef Goldberg 2022©</span>
        
        `;
  }
};
initializeSubscribeDiv();

const closeBtn = document.querySelector("#closeBtn");
const saleBanner = document.querySelector(".ctaSale");

closeBtn.addEventListener("click", () => {
  saleBanner.classList.toggle("d-none");
});

