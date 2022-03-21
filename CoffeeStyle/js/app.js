//FUNCTION FOR ADD MORE INFO
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

//PRODUCTS DATABASE 
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


let bucket = {}; //пустая корзина (ключ-значение)

//create card block
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
    image.className = "itemImage";

    image.src = `${itemData.img}`;
    item.appendChild(image);

    let nameTitle = document.createElement('div');
    nameTitle.className = "nameTitle";
    nameTitle.innerHTML = itemData.name;
    item.appendChild(nameTitle);

    let paretPrice = document.createElement('div');
    paretPrice.className = "paretPrice";

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
    descriptionlabel.innerHTML = itemData.description.split(",").join("\n");
    hiddenContainer.appendChild(descriptionlabel);

    let descriptionButton = document.createElement('div');
    descriptionButton.className = "button__box";
    hiddenContainer.appendChild(descriptionButton);


    let button = document.createElement('button');
    button.className = "buyItemBtn";
    button.innerHTML = "Add to cart";
    button.onclick = () => {
        console.log(`item clicked: ${itemData.name}`);
        addToBucket(itemData);
        updateCard();
    };
    descriptionButton.appendChild(button);

    //only one price
    if (itemData.oldPrice != "" && itemData.oldPrice != null) {
        let namePrice = document.createElement('div');
        namePrice.className = "oldPrice";
        namePrice.innerHTML = itemData.oldPrice;
        paretPrice.appendChild(namePrice);
        currentPrice.className = "namePrice";
    }
    //

    item.onmouseover = onItemOver;
    item.onmouseleave = onItemOut;

    // console.log(`item created for ${itemData.name} = ${item.innerHTML}`);
    return item;
}

function addToBucket(itemData) {
    if (bucket[itemData.id] === undefined) {
        bucket[itemData.id] = 1;
    } else {
        bucket[itemData.id] += 1;
    }
}

function removeFromBucket(itemData) {
    if (bucket.hasOwnProperty(itemData.id)) {
        bucket[itemData.id] -= 1;

        if (bucket[itemData.id] < 0) {
            delete bucket[item.id];
        }
    }
}

//create opacity block for card
function onItemOver(event) {
    let target = event.target.className;
    if (target === "itemImage") {

        let parent = event.target.parentNode;
        if (parent === undefined) {
            console.log("Can't find parent for " + target);
            return;
        }

        let container = parent.querySelector(".hiddenContainer");

        if (container != null) {
            container.style.opacity = 1;
            console.log("over " + target);
        }
    }
}
//create opacity block for card
function onItemOut(event) {
    console.log("try leave");
    let container = event.target.querySelector(".hiddenContainer");
    if (container == null) {
        let parent = event.target.parentNode;
        if (parent == undefined) {
            console.log("Can't find parent for " + event.target.className);
            return;
        }
        container = parent.querySelector(".hiddenContainer");
    }

    if (container != null && container.style.opacity > 0) {
        container.style.opacity = 0;
        console.log("hidden");
    } else {
        console.log("container not found for " + parent.className);
    }
}
//create opacity block for card

function updateCard() {
    let count = document.querySelector('.header__cartcount');
    let value = 0;
    for (let key in bucket) {
        let itemCount = bucket[key];
        value += itemCount;
    }
    count.innerHTML = value;
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
//delete cardItem
document.getElementById("delete").onclick = clearCart;

const tbl = document.getElementById('tableRow');
let cardRow = document.getElementById('buttontext');

cardRow.onclick = () => {
    fillCart();
    popup.style.display = "block";
}

//Get img/name/price for header
function fillCart() {

    const tableForPopup = document.createElement("table");
    tableForPopup.className = "myTable";
    tableForPopup.id = "table";
    tbl.appendChild(tableForPopup);


    const fullPrice = document.createElement('th');
    fullPrice.className = "popup__fullprice";
    fullPrice.innerHTML = "Total";
    tbl.appendChild(fullPrice);
    let deleteBtn = document.getElementById("delete");
    if (Object.keys(bucket).length > 0) {
        for (let key in bucket) {
            console.log(`[${key}] = ${bucket[key]}`);
            let itemData = db.find((el) => key == el.id);
            if (itemData === undefined) {
                console.log("ERROR for key:" + key);
            }
            let itemCount = bucket[key];
            shotCartItem(itemData, tableForPopup, itemCount);
        }

        // counted.forEach(keyValue => {
        //     let itemData = db.find((el) => id === el.id);
        //     shotCartItem(itemData, tableForPopup);
        // });
        deleteBtn.disabled = false;

    } else {
        clearCart();
    }

}
//Get img/name/price for header

//create card row. Get img/name/price 
function shotCartItem(itemData, tableElement, count) {
    let row = tableElement.insertRow();

    let imgCell = row.insertCell();
    // imgCell.tagName = "img";
    imgCell.innerHTML = `<img  class="imgrow" src=${itemData.img} alt=""/> `;
    let nameCell = row.insertCell();
    nameCell.innerHTML = itemData.name;

    let minusCard = row.insertCell();
    minusCard.innerHTML = "-";
    minusCard.onclick = () => {
        removeFromBucket(itemData);
    }

    let getCount = row.insertCell();
    getCount.innerHTML = count;

    let plusCard = row.insertCell();
    plusCard.innerHTML = "+";
    plusCard.onclick = () => {
        addToBucket(itemData);
    }


    let getSumma = row.insertCell();
    getSumma.innerHTML = itemData.price;
}

//create card row. Get img/name/price



function clearCart() {
    bucket = {};
    let tableForPopup = document.querySelector("table");
    if (tableForPopup != null) {
        tableForPopup.innerHTML = "";
        let total = document.querySelector(".popup__fullprice");
        total.innerHTML = " ";
        let popapHead = document.querySelector(".popup__head");
        popapHead.innerHTML = " ";

        tableForPopup.innerHTML = "Your shopping basket is empty.";
        tableForPopup.style.color = "red";
    }
    let deleteBtn = document.getElementById("delete");

    deleteBtn.disabled = true;
    deleteBtn.style.color = "grey";
    deleteBtn.style.border = "none";
}

// document.getElementById("button-back").addEventListener("click", emptyCart);

//total 
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
