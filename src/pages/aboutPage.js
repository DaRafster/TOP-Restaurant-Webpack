import ChefImage from "../images/chef-kitchen.jpg";
import PhoneIcon from "../images/phone.svg";
import EmailIcon from "../images/email.svg";
import AddressIcon from "../images/map-marker.svg";

function aboutPage() {
  if (content.classList.contains("about")) {
    return;
  }
  content.innerHTML = "";
  content.className = "about";
  const aboutContainer = document.createElement("div");
  const tempContainer1 = document.createElement("div");
  aboutContainer.classList.add("about-container");
  tempContainer1.innerHTML += `
    <h2>About Us</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Reprehenderit, fugit sit id asperiores animi provident. Maxime
    consectetur, qui ipsa neque quas, atque commodi hic, quia quaerat quod
    perspiciatis doloribus consequuntur? Lorem ipsum, dolor sit amet
    consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Reprehenderit, fugit sit id asperiores animi provident. Maxime
    consectetur, qui ipsa neque quas, atque commodi hic, quia quaerat quod
    perspiciatis doloribus consequuntur? Lorem ipsum, dolor sit amet
    consectetur adipisicing elit.</p>
    <h2>Contact Us</h2>`;

  const contactList = document.createElement("ul");
  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");
  const listItem3 = document.createElement("li");

  const emailIcon = new Image();
  emailIcon.src = EmailIcon;
  emailIcon.classList.add("icon");

  const phoneIcon = new Image();
  phoneIcon.src = PhoneIcon;
  phoneIcon.classList.add("icon");

  const addressIcon = new Image();
  addressIcon.src = AddressIcon;
  addressIcon.classList.add("icon");

  listItem1.appendChild(emailIcon);
  listItem1.innerHTML +=
    "&nbsp&nbsp<span>email: </span>&nbspexampleemail@gmail.com";
  contactList.appendChild(listItem1);

  listItem2.appendChild(phoneIcon);
  listItem2.innerHTML +=
    "&nbsp&nbsp<span>phone number: </span>&nbsp999-999-9999";
  contactList.appendChild(listItem2);

  listItem3.appendChild(addressIcon);
  listItem3.innerHTML +=
    "&nbsp&nbsp<span>address: </span>&nbsp123 Main Ave. Vancouver, BC VXX XXX";
  contactList.appendChild(listItem3);

  tempContainer1.appendChild(contactList);

  const tempContainer2 = document.createElement("div");
  const chefImage = new Image();
  chefImage.src = ChefImage;
  tempContainer2.appendChild(chefImage);

  aboutContainer.appendChild(tempContainer1);
  aboutContainer.appendChild(tempContainer2);
  content.appendChild(aboutContainer);
}

export { aboutPage };
