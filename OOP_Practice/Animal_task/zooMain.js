import {Zoo} from "./modules/zoo.js";

let zoo = new Zoo();

//
//create dom element for creatures
//
const root = document.getElementById('app-root')

const headingText = document.createElement('div');
headingText.className = "content";
headingText.innerHTML = "<h1>Твой новый друг </h1>";
root.appendChild(headingText);

const base = document.createElement('div');
base.className = "base";
headingText.appendChild(base);

//create animal base (container for categories)
const categoryContainer = document.createElement('div');
categoryContainer.className = "animals__base";
base.appendChild(categoryContainer);

const detailsContainer = document.createElement('div');
detailsContainer.className = 'details';

base.appendChild(detailsContainer);

const table = document.createElement('table');
table.className ='table';
detailsContainer.appendChild(table);


//Get cat info
function CreateCategoryItemComponent(container, name, count, imgSrc, callback){
    let  itemsCategory = document.createElement('div');
    itemsCategory.className = "animal";
    itemsCategory.innerHTML = `<img  class="img" src=${imgSrc} alt=" "/> `;
    container.appendChild(itemsCategory);


    let  categoryName = document.createElement('div');
    categoryName.className = 'categoryName';
    categoryName.innerHTML = name;
    itemsCategory.appendChild(categoryName);

    let  categoryCount = document.createElement('span');
    categoryCount.textContent = count;
    categoryName.appendChild(categoryCount);

//button
    let button = document.createElement('button');
    button.className = "img_button";
    button.innerHTML = 'Read more';
    button.onclick = callback;
    itemsCategory.appendChild(button);
}

function ClickedOnCategory(categoryName){
    let allCreatureByCategory = zoo.getCreaturesByType(categoryName);
    CreateTableForAnimals(table, allCreatureByCategory);
}


CreateCategoryItemComponent(categoryContainer, 'CAT: ', zoo.getCreaturesCountByType('CAT'), '../Animal_task/img/cat.png', ()=> ClickedOnCategory("CAT"));
CreateCategoryItemComponent(categoryContainer, 'DOG: ', zoo.getCreaturesCountByType('DOG'), '../Animal_task/img/dog.png', ()=> ClickedOnCategory("DOG"));
CreateCategoryItemComponent(categoryContainer, 'PANDA: ', zoo.getCreaturesCountByType('PANDA'), '../Animal_task/img/panda.png', ()=> ClickedOnCategory("PANDA"));
CreateCategoryItemComponent(categoryContainer, 'KOALA: ', zoo.getCreaturesCountByType('KOALA'), '../Animal_task/img/koala.png', ()=> ClickedOnCategory("KOALA"));

function CreateCreatureDetailsItem(container, item) {
    let creatureType = item.getCreatureType();
    let itemContainer = document.createElement('div');
    itemContainer.className = 'itemContainer_' + creatureType;
    table.appendChild(itemContainer);


    let  itemsName = document.createElement('div');
    itemsName.className = "items";
    itemsName.innerHTML = `Name: ${item.toString()}`;
    itemContainer.appendChild(itemsName);

    let  itemsType = document.createElement('div');
    itemsType.className = "items";
    itemsType.innerHTML = `Type:    ${creatureType}`;
    itemContainer.appendChild(itemsType);

    let  itemsMaxAge = document.createElement('div');
    itemsMaxAge.className = "items";
    itemsMaxAge.innerHTML = `Average life span in wild:  ${item.getMaxAge()}`;
    itemContainer.appendChild(itemsMaxAge);

    let  itemsCurrentAge = document.createElement('div');
    itemsCurrentAge.className = "items";
    itemsCurrentAge.innerHTML = `Current age: ${item.getAge()}`;
    itemContainer.appendChild(itemsCurrentAge);

    let  itemsMass = document.createElement('div');
    itemsMass.className = "items";
    itemsMass.innerHTML = `<div>Weight: ${item.getMass()} kg</div>`;
    itemContainer.appendChild(itemsMass);

    let  itemsCameFrom = document.createElement('div');
    itemsCameFrom.className = "items";
    itemsCameFrom.innerHTML = `<div>From: ${item.getCameFrom()} </div>`;
    itemContainer.appendChild(itemsCameFrom);
}

//Crete heading for table
function CreateTableForAnimals(table, items) {

    //clear table first
    table.innerHTML = "";
    items.forEach(item => {
        CreateCreatureDetailsItem(table, item);
    })
}

// create function with Details
