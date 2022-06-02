const appRoot = document.getElementById('app-root');

//create container
const containerElement = document.createElement('div');
containerElement.className = "container";
appRoot.appendChild(containerElement);

//create component h2
const header = document.createElement("h2");
header.innerHTML = "Countries Search";
containerElement.appendChild(header);

//create formBox div
const formElement = document.createElement('div');
formElement.className = "formElement";
containerElement.appendChild(formElement);

//create choose text for radio button and select
const objLabel  = document.createElement('div');
objLabel.className = "content_form";
objLabel.innerHTML = "<p>Please choose the type of search:</p> <p>Please choose search query:</p>";
formElement.appendChild(objLabel);


//create form
const form = document.createElement("form");
form.className = "form";
formElement.appendChild(form);

//create radioBox div (languages/regions)
const radioBox = document.createElement("div");
radioBox.className = "form-group";
form.appendChild(radioBox);

const defaultFilter = "";//"languages";//"regions";

// create p element for input and label by regions
const regionParent = document.createElement("p");
regionParent.className = "region_parent_box";
radioBox.appendChild(regionParent);

const radioItem1 = document.createElement("input");
radioItem1.type = "radio";
radioItem1.name = "myRadios";
radioItem1.id = "myRadios1";
radioItem1.value = "regions";
radioItem1.onclick = ()=>{showError(true)};
regionParent.appendChild(radioItem1);

const objTextNode1 = document.createElement("label");
objTextNode1.htmlFor = "myRadios1";
objTextNode1.textContent = "By region";
objTextNode1.onclick = onRegionsClicked;
if (defaultFilter === "region") {
    objTextNode1.defaultChecked = true;
}
regionParent.appendChild(objTextNode1);

// create p element for input and label by languages
const languagesParent = document.createElement("p");
languagesParent.className = "languages_parent_box";
radioBox.appendChild(languagesParent);

const radioItem2 = document.createElement("input");
radioItem2.type = "radio";
radioItem2.name = "myRadios";
radioItem2.id = "myRadios2";
radioItem2.value = "languages";
radioItem2.onclick = ()=>{showError(true);};
languagesParent.appendChild(radioItem2);

const objTextNode2 = document.createElement("label");
objTextNode2.htmlFor = "myRadios2";
objTextNode2.id = "lebel1";
objTextNode2.textContent = "By language";
objTextNode2.onclick = onLanguagesClicked;
if (defaultFilter === "languages") {
    objTextNode2.defaultChecked = true;
}
languagesParent.appendChild(objTextNode2);

//input label
radioItem1.after(objTextNode1)
radioItem2.after(objTextNode2)


// create p element for input and label by languages
const selectParent = document.createElement("p");
selectParent.className = "select_parent_box";
radioBox.appendChild(selectParent);


const selectItem = document.createElement("select");
selectItem.type = "text";
selectItem.id = "select";
selectItem.value = "";
selectItem.onchange = onSelectChange;
selectItem.onclick = ()=>{showError(false)};
selectItem.name = "Select";
selectParent.appendChild(selectItem);


const selectOption = document.createElement("option");
selectOption.type = "option";
selectOption.value = "";
selectOption.textContent = "Select value";
selectItem.appendChild(selectOption);


const err = document.createElement("div");
err.className = "err";
err.id = "err";
err.textContent = "No items, please choose search query";
containerElement.appendChild(err);

// function for show and hide text "No items, please choose search query"
function showError(show) {
    let element = document.querySelector('.err');
    element.style.visibility = show ? 'visible':'hidden';
}

//function with RegionsList
function onRegionsClicked() {
    fillSelector(externalService.getRegionsList());
    document.querySelector(".table").innerHTML = "";
}
//function with LanguagesList
function onLanguagesClicked() {
    fillSelector(externalService.getLanguagesList());
    document.querySelector(".table").innerHTML = "";
}
//function for  daley previous items and  select new arr
function fillSelector(items) {
    removeOptions(selectItem);
    let selectOption = document.createElement("option");
    selectOption.type = "option";
    selectOption.value = "";
    selectOption.textContent = "Select value";
    selectItem.appendChild(selectOption);
    items.forEach(item => {
        let selectOption = document.createElement("option");
        selectOption.type = "option";
        selectOption.textContent = item;
        selectItem.appendChild(selectOption);
    });
}
//function for  daley previous items
function removeOptions(selectElement) {
    let i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

if (defaultFilter === "regions") {
    onRegionsClicked();
} else if (defaultFilter === "languages") {
    onLanguagesClicked();
}

//Application table
const tableWithCountry = document.createElement("table");
tableWithCountry.className = "table";
tableWithCountry.id = "myTable";
containerElement.appendChild(tableWithCountry);

// CreateTable
const tbl = document.getElementById("myTable");

function createTable(table, items) {
    const collumsWithHeading = document.createElement("tr");
    tbl.appendChild(collumsWithHeading);

    const collumsNames = document.createElement("th");
    collumsNames.className = "heading";
    collumsNames.textContent = "Country name";
    collumsWithHeading.appendChild(collumsNames);

    const collumsCapital = document.createElement("th");
    collumsCapital.className = "heading";
    collumsCapital.textContent = "Capital";
    collumsWithHeading.appendChild(collumsCapital);

    const collumsRegion = document.createElement("th");
    collumsRegion.className = "heading";
    collumsRegion.textContent = "World Region";
    collumsWithHeading.appendChild(collumsRegion);

    const collumsLanguages = document.createElement("th");
    collumsLanguages.className = "heading";
    collumsLanguages.textContent = "Languages";
    collumsWithHeading.appendChild(collumsLanguages);

    const collumsArea = document.createElement("th");
    collumsArea.className = "heading";
    collumsArea.textContent = "Area";
    collumsWithHeading.appendChild(collumsArea);

    const collumsFlag = document.createElement("th");
    collumsFlag.className = "heading";
    collumsFlag.textContent = "Flag ";
    collumsWithHeading.appendChild(collumsFlag);

    // set column color
    let i = 0;
    items.forEach(item => {
        let row = table.insertRow();
        if (i % 2 === 0) {
            //тут мы красим row
            row.style.backgroundColor = "#e2e2e2";
        }
        i++;
        //get value from data,
        let langArray = Object.values(item.languages);
        let langString = langArray.join(', ');
        let name = row.insertCell().innerHTML = item.name;
        let capital = row.insertCell().innerHTML = item.capital;
        let region = row.insertCell().innerHTML = item.region;
        let languages = row.insertCell().innerHTML = langString;
        let area = row.insertCell().innerHTML = item.area;
        let img = row.insertCell().innerHTML = `<img  class="img" src=${item.flagURL} alt=" "/> `;

    })
}
// get el in page
function onSelectChange() {
    let selection = selectItem.value;
    console.log(`onSelect: ${selection}`);

    document.querySelector(".table").innerHTML = " ";
    //check if regions is active
    if (radioItem1.checked) {
        let tableItems = externalService.getCountryListByRegion(selection);
        createTable(tbl, tableItems);
    } else if (radioItem2.checked) {
        tableItems = externalService.getCountryListByLanguage(selection);
        createTable(tbl, tableItems);
    }
}

