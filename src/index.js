import "./style.css";
import { homePage } from "./pages/homePage";
import { menuPage } from "./pages/menuPage";
import { aboutPage } from "./pages/aboutPage";
import SearchIcon from "./images/magnify.svg";
import AccountIcon from "./images/account-circle.svg";
import CartIcon from "./images/cart-outline.svg";

const content = document.querySelector("#content");

function headerImages() {
  const searchIcon = new Image();
  searchIcon.src = SearchIcon;
  searchIcon.classList.add("icon");

  const cartIcon = new Image();
  cartIcon.src = CartIcon;
  cartIcon.classList.add("icon");

  const accountIcon = new Image();
  accountIcon.src = AccountIcon;
  accountIcon.classList.add("icon");

  const accountOptions = document.querySelector(".account-options");
  accountOptions.append(searchIcon);
  accountOptions.append(cartIcon);
  accountOptions.append(accountIcon);
}

document.querySelector(".home-btn").addEventListener("click", homePage);
document.querySelector(".title").addEventListener("click", homePage);
document.querySelector(".menu-btn").addEventListener("click", menuPage);
document.querySelector(".about-btn").addEventListener("click", aboutPage);

headerImages();
homePage();
