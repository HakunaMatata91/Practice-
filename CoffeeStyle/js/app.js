function readMore() {
   let dots = document.getElementById('dots');
   let more = document.getElementById('more');
   let btn = document.getElementById('btn1');

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read the full Story";
      more.style.display = "none";
   } else {
      dots.style.display = "none";
      btn.innerHTML = "Read Less";
      more.style.display = "inline";
   }
}
const db = [
   {
      id: 0,
      img: "images/coffeFlowers1.png",
      name: "Pink Premium Ceramic",
      description: "",
      price: "$ 99.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 1,
      img: "images/GoldenDes2.png",
      name: "Golden Designers Mug",
      description: "",
      price: "$50.00",
      oldPrice: "$69.00",
      featured: false
   },
   {
      id: 2,
      img: "images/redDes3.png",
      name: "Red Love Cup",
      description: "",
      price: "$25.00",
      oldPrice: "$37.00",
      featured: false
   },
   {
      id: 3,
      img: "images/blackDes4.png",
      name: "Black Tea Cup",
      description: "",
      price: "$15.00",
      oldPrice: "$29.00",
      featured: false
   },
   {
      id: 4,
      img: "images/B&WDes5.png",
      name: "B&W Essentials Mug",
      description: "",
      price: "$19.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 5,
      img: "images/Winter.png",
      name: "Winter Style Mug",
      description: "",
      price: "$25.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 6,
      img: "images/Ceramic.png",
      name: "Ceramic Tea",
      description: "",
      price: "$46.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 7,
      img: "images/Handle.png",
      name: "No Handle Bar Cup",
      description: "",
      price: "$34.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 8,
      img: "images/EspressoDes6.png",
      name: "Espresso Cup by Mugs.co",
      description: "",
      price: "$25.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 9,
      img: "images/pinkDes7.png",
      name: "Pink Premium Ceramic",
      description: "",
      price: "$99.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 10,
      img: "images/summerDes8.png",
      name: "Summer Designer Cup",
      description: "",
      price: "$29.00",
      oldPrice: "",
      featured: false
   }

]

function createCupElement(itemData, isFeatured) {
   let item = document.createElement("div");
   if (isFeatured) {
      item.setAttribute("id", "featured__images");
   } else {
      item.setAttribute("id", "product__images");
   }

   let image = document.createElement("img");
   if (isFeatured) {
      image.setAttribute("id", "featured__images img");
   } else {
      image.setAttribute("id", "product__images img");
   }

   image.src = `${itemData.img}`;
   item.appendChild(image);

   let nameTitle = document.createElement('div');
   nameTitle.className = "nameTitle";
   nameTitle.innerHTML = itemData.name;
   item.appendChild(nameTitle);

   let namePrice = document.createElement('div');
   namePrice.className = "namePrice";
   namePrice.innerHTML = itemData.price;
   item.appendChild(namePrice);
   //only one price
   if (itemData.oldPrice != "" && itemData.oldPrice != null) {
      let namePrice = document.createElement('div');
      namePrice.className = "oldPrice";
      namePrice.innerHTML = itemData.oldPrice;
      namePrice.id = ""
      item.appendChild(namePrice);
   }


   console.log(`item created for ${itemData.name} = ${item.innerHTML}`);
   return item;
}

let f1 = createCupElement(db[0], true);
let f2 = createCupElement(db[1], true);
let container = document.querySelector(".featured__row");
container.appendChild(f1);
container.appendChild(f2);

let container2 = document.querySelector(".products__row");
for (let i = 2; i < db.length; i++) {
   const element = db[i];
   let item = createCupElement(element, false);
   container2.appendChild(item);
}
// let f3 = createCupElement(db[2]);
// let f4 = createCupElement(db[3]);
// let container2 = document.querySelector(".products__row");
// container2.appendChild(f3);
// container2.appendChild(f4);
// container2.appendChild(f5);