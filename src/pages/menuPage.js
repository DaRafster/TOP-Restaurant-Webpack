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
  content.className = "menu";
  content.innerHTML = `<h1>Our Menu</h1>
  <div class = menu-container>
    <div>
      <h2>Lunch</h2>
      ${recipeCard(LunchImage, "Steak with Truffle Fries").innerHTML}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore commodi repellendus accusantium consequuntur nobis! 
      Explicabo commodi nemo quod, quis magnam dolore neque expedita 
      et eveniet sed tempore pariatur veritatis.</p>
    </div>
    <div>
      <h2>Dinner</h2>
      ${recipeCard(DinnerImage, "Fettucine Alfredo").innerHTML}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore commodi repellendus accusantium consequuntur nobis! 
      Explicabo commodi nemo quod, quis magnam dolore neque expedita 
      et eveniet sed tempore pariatur veritatis.</p>
    </div>
    <div>
      <h2>Dessert</h2>
      ${recipeCard(DessertImage, "Red Velvet Cake").innerHTML}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore commodi repellendus accusantium consequuntur nobis! 
      Explicabo commodi nemo quod, quis magnam dolore neque expedita 
      et eveniet sed tempore pariatur veritatis.</p>
    </div>
    </div>`;
}

export { menuPage };
