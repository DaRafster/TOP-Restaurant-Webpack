import "./style.css";
import RestaurantImage from "./images/restaurant.jpg";
import SearchIcon from "./images/magnify.svg";
import AccountIcon from "./images/account-circle.svg";
import CartIcon from "./images/cart-outline.svg";

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

function landingPage() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  gridContainer.innerHTML = `<div class="home-info">
    <h2>
        <span class="block">Welcome to</span>
        <span class="colored">Thyme Garden</span>
    </h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Reprehenderit, fugit sit id asperiores animi provident. Maxime
        consectetur, qui ipsa neque quas, atque commodi hic, quia quaerat quod
        perspiciatis doloribus consequuntur? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. 
    </p>
    <button>View Menu</button>
    <h3>Restaurant Hours</h3>
    <ul>
        <li><span>Monday - Friday:</span> 12:00 PM - 10:30 PM</li>
        <li><span>Saturday - Sunday:</span> 12:00 PM - 12:00 AM</li>
        <li>
        <span>Holiday Hours:</span> Please call for holiday hours, as they
        may vary.
        </li>
    </ul>
    </div>`;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("home-image");
  const myRestaurantImage = new Image();
  myRestaurantImage.src = RestaurantImage;

  imageContainer.appendChild(myRestaurantImage);
  gridContainer.appendChild(imageContainer);

  return gridContainer;
}

headerImages();
document.body.append(landingPage());
