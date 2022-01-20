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

const form = document.createElement("form");
form.className = "form";
formElement.appendChild(form);

////create objLabelBox
const objLabelBox = document.createElement('div');
objLabelBox.className = "objLabelBox";
form.appendChild(objLabelBox);

////create objLabelBox(p)
const objLabel = document.createElement("p");
objLabel.textContent = "Please choose the type of search:";
objLabelBox.appendChild(objLabel);
const objLabel2 = document.createElement("p");
objLabel2.textContent = "Please choose search query:";
objLabelBox.appendChild(objLabel2);

////create buttonBox div with 2 Child div
const buttonBox = document.createElement('div');
buttonBox.className = "buttonBox";
form.appendChild(buttonBox);

////create radioBox div (languages/regions)
const radioBox = document.createElement("div");
radioBox.className = "radioBox";
buttonBox.appendChild(radioBox);

const defaultFilter = "";//"languages";//"regions";

//regions radio button
const region = document.createElement("div");
region.className = "region";
radioBox.appendChild(region);

const radioItem1 = document.createElement("input");
radioItem1.type = "radio";
radioItem1.name = "myRadios";
radioItem1.id = "myRadios1";
radioItem1.value = "regions";
radioItem1.onclick = ()=>{showError(true);};;
region.appendChild(radioItem1);

//languages radio button
const language = document.createElement("div");
language.className = "language";
radioBox.appendChild(language);

const radioItem2 = document.createElement("input");
radioItem2.type = "radio";
radioItem2.name = "myRadios";
radioItem2.id = "myRadios2";
radioItem2.value = "languages";
radioItem2.onclick = ()=>{showError(true);};
language.appendChild(radioItem2);

// label for region radio button
const objTextNode1 = document.createElement("label");
objTextNode1.htmlFor = "myRadios1";
objTextNode1.textContent = "By region";
objTextNode1.onclick = onRegionsClicked;
if (defaultFilter === "region") {
    objTextNode1.defaultChecked = true;
}
radioItem1.appendChild(objTextNode1);

// label for language radio button
const objTextNode2 = document.createElement("label");
objTextNode2.htmlFor = "myRadios2";
objTextNode2.id = "lebel1";
objTextNode2.textContent = "By language";
objTextNode2.onclick = onLanguagesClicked;
if (defaultFilter === "languages") {
    objTextNode2.defaultChecked = true;
}
radioItem2.appendChild(objTextNode2);

//input label
radioItem1.after(objTextNode1)
radioItem2.after(objTextNode2)

////create selectBox form (option)
const selectBox = document.createElement("form");
selectBox.className = "form2";
buttonBox.appendChild(selectBox);

const selectItem = document.createElement("select");
selectItem.type = "text";
selectItem.id = "select";
selectItem.value = "";
selectItem.onchange = onSelectChange;
selectItem.onclick = ()=>{showError(false);};
selectItem.name = "Select";
selectBox.appendChild(selectItem);


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

// function for show and hede text "No items, please choose search query"
function showError(show) {
    let element = document.querySelector('.err');
    element.style.visibility = show?'visible':'hidden';
}

//function with RegionsList
function onRegionsClicked(event) {
    fillSelector(externalService.getRegionsList());
    document.querySelector(".table").innerHTML = "";
}
//function with LanguagesList
function onLanguagesClicked(event) {
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

// CreateTabl
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
        if (i % 2 == 0) {
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
        let img = row.insertCell().innerHTML = `<img  src=${item.flagURL} alt=" "/> `;

    })
}
// get el in page 
function onSelectChange() {
    let selection = selectItem.value;
    console.log(`onSelect: ${selection}.`);

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
