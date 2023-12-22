"use strict";

/////////////////////
// HAMBURGER MENU
/////////////////////

const btnMenuEl = document.querySelector(".btn__menu");
const navBoxEl = document.querySelector(".nav-box");
const navLinksEl = document.querySelectorAll(".nav__link");
const cartEl = document.querySelector(".shopping-cart");

function hideMenu() {
  if (btnMenuEl.classList.contains("btn__menu--active")) {
    document.body.classList.remove("body-fix");
    btnMenuEl.classList.remove("btn__menu--active");
    navBoxEl.classList.remove("nav-box--active");
  }
}

function handleMobileNav() {
  if (btnMenuEl) {
    document.body.classList.toggle("body-fix");
    btnMenuEl.classList.toggle("btn__menu--active");
    navBoxEl.classList.toggle("nav-box--active");
  }
}

if (navLinksEl.length > 0) {
  navLinksEl.forEach((link) => {
    link.addEventListener("click", hideMenu);
  });
}

if (btnMenuEl) {
  btnMenuEl.addEventListener("click", handleMobileNav);
}

cartEl.addEventListener("click", handleMobileNav);

////////////////////////
// TABS
////////////////////////

import replicas from "../json/replicas.json" assert { type: "json" };

const tabsEl = document.querySelectorAll(".country");
const tabBoxEl = document.querySelector(".countries-box");
const replicasBoxEl = document.querySelector(".replicas-box .container");

tabBoxEl.addEventListener("click", (e) => {
  let htmlCode = ``;
  const tabClicked = e.target.closest(".country");
  const tabText = tabClicked.innerText;

  if (!tabClicked) return;

  tabsEl.forEach((tab) => {
    tab.classList.remove("country--active");
  });
  tabClicked.classList.add("country--active");

  let countrySelected = replicas.filter((c) => c.country === `${tabText}`);

  countrySelected.forEach((country = "France") => {
    htmlCode += `
            <div class="replica">
              <div class="replica__img-box">
                <img
                  class="replica__img"
                  src="${country.url}"
                  alt="${country.author} - ${country.name}"
                />
              </div>
              <p class="replica__author">${country.author}</p>
              <p class="replica__name">${country.name}</p>
              <p class="replica__materials">${country.materials}</p>
              <p class="replica__price">${country.price} &#x20bd;</p>
              <a href="#" class="btn btn--transparent">Add to Cart</a>
            </div>
  `;
  });

  replicasBoxEl.innerHTML = htmlCode;
});
