import LunchImage from "../images/steak-with-fries.jpg";
import DinnerImage from "../images/fettucine-alfredo.jpg";
import DessertImage from "../images/red-velvet-cake.jpg";

function recipeCard(image, mealName) {
  const tempContainer = document.createElement("div");

  const recipeCard = document.createElement("div");
  recipeCard.classList.add("meal-card");

  recipeCard.innerHTML = `<h3>${mealName}</h3>`;

  const mealImage = new Image();
  mealImage.src = image;

  recipeCard.appendChild(mealImage);
  tempContainer.appendChild(recipeCard);

  return tempContainer;
}

function menuPage() {
  if (content.classList.contains("menu")) {
    return;
  }
  content.className = "menu";
  content.innerHTML = `<h1>Our Menu</h1>
  <div class = menu-container>
    <div>
      <h2>Lunch</h2>
      <div>
      ${recipeCard(LunchImage, "Steak with Truffle Fries").innerHTML}
      </div>
      <p class = "meal-img-attribution">Photo by <a href="https://unsplash.com/@covertnine?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tim Toomey</a> on <a href="https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore commodi repellendus accusantium consequuntur nobis! 
      Explicabo commodi nemo quod, quis magnam dolore neque expedita 
      et eveniet sed tempore pariatur veritatis.</p>
    </div>
    <div>
      <h2>Dinner</h2>
      ${recipeCard(DinnerImage, "Fettuccine Alfredo").innerHTML}
      <p class = "meal-img-attribution">Photo by <a href="https://unsplash.com/@eaterscollective?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eaters Collective</a> on <a href="https://unsplash.com/photos/pasta-dish-on-white-plate-ddZYOtZUnBk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore commodi repellendus accusantium consequuntur nobis! 
      Explicabo commodi nemo quod, quis magnam dolore neque expedita 
      et eveniet sed tempore pariatur veritatis.</p>
    </div>
    <div>
      <h2>Dessert</h2>
      ${recipeCard(DessertImage, "Red Velvet Cake").innerHTML}
      <p class = "meal-img-attribution">Photo by <a href="https://unsplash.com/@amir_v_ali?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/sliced-cake-on-white-ceramic-plate-EfkMkUXs0fU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore commodi repellendus accusantium consequuntur nobis! 
      Explicabo commodi nemo quod, quis magnam dolore neque expedita 
      et eveniet sed tempore pariatur veritatis.</p>
    </div>
    </div>`;
}

export { menuPage };
