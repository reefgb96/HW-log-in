"use strict";
// import {imgSliderArr, deliveryInfoArr, brandsArr, shopArr, subscribeArr, surfboardsArr} from "./dataInitialization"

const closeBtn = document.querySelector("#closeBtn");
const saleBanner = document.querySelector(".ctaSale");

closeBtn.addEventListener("click", () => {
  saleBanner.classList.toggle("d-none");
});

const surfboardsCategories = document.querySelector(".surfboardCategories");

const initializeSlider = () => {
  for (let sliderImg of sliderArr) {
    surfboardsCategories.innerHTML += `
        <img src="${sliderImg.imgUrl}" alt="${sliderImg.title}">
        `;
  }
};
initializeSlider();

const surfboardItemsDiv = document.querySelector(".surfboardsItems");
const surfboardItemsList = document.querySelector(".surfboardsItemsList");

const initializeItems = (arr) => {
  surfboardItemsList.innerHTML = "";
  for (let surfboard of arr) {
    surfboardItemsList.innerHTML += `
        <li>
            <div class="card my-5" style="width: 18rem;">
                <img src="${surfboard.imgUrl}" class="card-img-top" alt="${surfboard.brand}">
                <div class="card-body">
                    <h5 class="card-title">${surfboard.brand}</h5>
                    <p class="card-text">${surfboard.description}</p>
                    <p class="card-text">Price: ${surfboard.price}$</p>
                    <a href="#" class="btn addCartBtn">Add to cart</a>
                </div>
            </div>
      </li>
    `;
  }
};
initializeItems(surfboardsArr);

// buttons.
const sortHighToLow = document.getElementById("highLow");
const sortLowToHigh = document.getElementById("lowHigh");
const sortFilterSearch = document.getElementById("filter");
const sortShuffle = document.getElementById("shuffle");
const sortToList = document.getElementById("toList");
const sortToGrid = document.getElementById("toGrid");
const sortClear = document.getElementById("clear");

// search input.
const searchItemDiv = document.querySelector(".searchItem");
const searchInput = document.querySelector(".inputSort");

const sortDir = (sortDir) => {
  surfboardItemsList.innerHTML = "";
  if (sortDir === "⬆") {
    surfboardsArr.sort((a, b) => b.price - a.price);
    initializeItems(surfboardsArr);
  }

  if (sortDir === "⬇") {
    surfboardsArr.sort((a, b) => a.price - b.price);
    initializeItems(surfboardsArr);
    console.log(surfboardsArr);
  }
};

const filterSearch = (event) => {
  let value = event.target.value;
  let surfboardsArr2 = surfboardsArr.filter((item) =>
    item.brand.toLowerCase().includes(value.toLowerCase())
  );
  initializeItems(surfboardsArr2);

  if (value === "") {
    initializeItems(surfboardsArr);
  }
  console.log(event.target.value);
};

sortToGrid.addEventListener("click", () => {
  initializeItems(surfboardsArr);
});
