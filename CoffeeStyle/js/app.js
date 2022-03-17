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
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 99.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 1,
      img: "images/GoldenDes2.png",
      name: "Golden Designers Mug",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 50.00",
      oldPrice: "$ 69.00",
      featured: false
   },
   {
      id: 2,
      img: "images/redDes3.png",
      name: "Red Love Cup",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 25.00",
      oldPrice: "$ 37.00",
      featured: false
   },
   {
      id: 3,
      img: "images/blackDes4.png",
      name: "Black Tea Cup",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 15.00",
      oldPrice: "$ 29.00",
      featured: false
   },
   {
      id: 4,
      img: "images/B&WDes5.png",
      name: "B&W Essentials Mug",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 19.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 5,
      img: "images/Winter.png",
      name: "Winter Style Mug",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 25.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 6,
      img: "images/Ceramic.png",
      name: "Ceramic Tea",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 46.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 7,
      img: "images/Handle.png",
      name: "No Handle Bar Cup",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 34.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 8,
      img: "images/EspressoDes6.png",
      name: "Espresso Cup by Mugs.co",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 25.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 9,
      img: "images/pinkDes7.png",
      name: "Pink Premium Ceramic",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 99.00",
      oldPrice: "",
      featured: false
   },
   {
      id: 10,
      img: "images/summerDes8.png",
      name: "Summer Designer Cup",
      description: "Состав:,  Молоко,  Взбитые сливки,  Амаретто,  Тростниковый сахар,  Перец Чили,  Ваниль,  Темный шоколад",
      price: "$ 29.00",
      oldPrice: "",
      featured: false
   }

]

let cart = [0, 1];

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

   let paretPrice = document.createElement('div');
   paretPrice.className = "paretPrice";

   // paretPrice.innerHTML = itemData.price;
   item.appendChild(paretPrice);

   let currentPrice = document.createElement('div');
   currentPrice.className = "curentPrice";
   currentPrice.innerHTML = itemData.price;
   paretPrice.appendChild(currentPrice);

   let hiddenContainer = document.createElement('div');
   hiddenContainer.className = "hiddenContainer";
   item.appendChild(hiddenContainer);

   //create opacity content-cart
   let descriptionlabel = document.createElement('div');
   descriptionlabel.className = "descriptionlabel";
   descriptionlabel.innerHTML = itemData.description.split(",").join("\n");;
   hiddenContainer.appendChild(descriptionlabel);


   let button = document.createElement('button');
   button.className = "buyItemBtn";
   button.innerHTML = "Add to cart";
   button.onclick = () => {
      console.log(`item clicked: ${itemData.name}`);
      cart.push(itemData.id);
      updateCard();
   };
   hiddenContainer.appendChild(button);

   //only one price
   if (itemData.oldPrice != "" && itemData.oldPrice != null) {
      let namePrice = document.createElement('div');
      namePrice.className = "oldPrice";
      namePrice.innerHTML = itemData.oldPrice;
      paretPrice.appendChild(namePrice);
      currentPrice.className = "namePrice";
   }
   //




   // console.log(`item created for ${itemData.name} = ${item.innerHTML}`);
   return item;
}

function updateCard() {
   let count = document.querySelector('.header__cartcount');
   count.innerHTML = cart.length;
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
//table 
const popup = document.querySelector('.popup')
const tbl = document.getElementById('tableRow');
let cardRow = document.getElementById('buttontext');
cardRow.onclick = () => {
   createTable();
   popup.style.display = "block";
}

function createTable() {

   const tableForPopup = document.createElement("table");
   tableForPopup.className = "myTable";
   tableForPopup.id = "table";
   tbl.appendChild(tableForPopup);


   const fullPrice = document.createElement('th');
   fullPrice.className = "popup__fullprice";
   fullPrice.innerHTML = "Total";
   tbl.appendChild(fullPrice);


   console.log(`cart has ${cart.length} items`);
   cart.forEach(id => {
      let itemData = db.find((el) => id === el.id);
      shotCartItem(itemData, tableForPopup);
   });
}



function shotCartItem(itemData, tableElement) {
   let row = tableElement.insertRow();

   let imgCell = row.insertCell();
   // imgCell.tagName = "img";
   imgCell.innerHTML = `<img  class="imgrow" src=${itemData.img} alt=""/> `;
   let nameCell = row.insertCell();
   nameCell.innerHTML = itemData.name;

   let minusCard = row.insertCell();
   minusCard.innerHTML = "-";

   let getCount = row.insertCell();
   getCount.innerHTML = "0";

   let plusCard = row.insertCell();
   plusCard.innerHTML = "+";


   let getSumma = row.insertCell();
   getSumma.innerHTML = itemData.price;

}


//full price
//plus new cart 
//minus new cart 
//delete cart




//
// const priceWithoutSpaces = (str) => {
//    return str.replace(/\s/g, '');
// };
// const normalPrice = (str) => {
//    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '')
// };

// let price = 0;
// const plusFullPrice = (currentPrice) => {
//    return price += currentPrice;
// }
// const minusFullPrice = (currentPrice) => {
//    return price -= currentPrice;
// }

// let fullPrice = document.querySelector('.popup__price')
// const printFullPrice () => {
//    fullPrice.textContent = `${}  $`;
// }

// 
