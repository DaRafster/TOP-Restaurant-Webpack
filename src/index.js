import "./style.css";
import { homePage } from "./pages/homePage";
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

function menuPage() {
  content.className = "menu";
  content.innerHTML = "";
}

document.querySelector(".home-btn").addEventListener("click", homePage);
document.querySelector(".menu-btn").addEventListener("click", menuPage);

headerImages();
homePage();
