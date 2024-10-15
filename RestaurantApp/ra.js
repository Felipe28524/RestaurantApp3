let buttons = document.querySelectorAll(".mainButtons");

buttons.forEach(btn => btn.addEventListener("click", function () {
    buttons.forEach(button => button.classList.remove("activeBtn"));
    this.classList.add("activeBtn");
}))

let productsSection = document.getElementById("productsSection");

productsSection.innerHTML = "";


// Array number 1
const burgerZKurczakiem = {
    codeName: "burgerZKurczakiem",
    name: "Burger z Kurczakiem",
    textPrice: "22,00zł",
    price: 22.00,
    image: "makurczak.png",
}

const burgerZWolowina = {
    codeName: "burgerZWolowina",
    name: "Burger z Wołowiną",
    textPrice: "30,20zł",
    price: 30.20,
    image: "wies-mac.png",
}

const burgerZKurczakiemKentucky = {
    codeName: "burgerZKurczakiemKentucky",
    name: "Burger z Kurczakiem Kentucky",
    textPrice: "27,50zł",
    price: 27.50,
    image: "Zinger_Burger.png",
}

const dlugiBurgerZKurczakiemKentucky = {
    codeName: "dlugiBurgerZKurczakiemKentucky",
    name: "Długi burger z kurczakiem Kentucky",
    textPrice: "9,00zł",
    price: 9.00,
    image: "longer.png",
}

const kurczakBurger = {
    codeName: "kurczakBurger",
    name: "Kurczakburger",
    textPrice: "6,70zł",
    price: 6.70,
    image: "chickenburger.png",
}

// Array number 2
const wiesMac = {
    codeName: "wiesMac",
    name: "Duży burger z wołowiną",
    textPrice: "21,50zł",
    price: 21.50,
    image: "wies-mac.png",
}

const cheeseburger = {
    codeName: "cheeseburger",
    name: "Chesseburger",
    textPrice: "6,20zł",
    price: 6.20,
    image: "cheeseburger.png",
}

const hamburger = {
    codeName: "hamburger",
    name: "Hamburger",
    textPrice: "7,00zł",
    price: 7,
    image: "hamburger.png",
}

const mcdouble = {
    codeName: "mcdouble",
    name: "Mały burger z podwójną wołowiną",
    textPrice: "5,00zł",
    price: 5,
    image: "mcdouble.png",
}

//Array number 3

const maleFrytki = {
    codeName: "maleFrytki",
    name: "Małe Frytki",
    textPrice: "4,50zł",
    price: 4.50,
    image: "frytunie.png",
}

const srednieFrytki = {
    codeName: "srednieFrytki",
    name: "Średnie Frytki",
    textPrice: "6,00zł",
    price: 6,
    image: "frytunie.png",
}

const duzeFrytki = {
    codeName: "duzeFrytki",
    name: "Duże Frytki",
    textPrice: "7,50zł",
    price: 7.50,
    image: "frytunie.png",
}

//Array number 4
const wegeBurgerKurczak = {
    codeName: "wegeBurgerKurczak",
    name: 'Wege burger z kurczakiem',
    textPrice: "19,00zł",
    price: 19,
    image: "wegeburgerkurczak.png",
}

const wegeNuggetsy = {
    codeName: "wegeNuggetsy",
    name: "Wege nuggetsy (5szt.)",
    textPrice: "8,50zł",
    price: 8.50,
    image: "wegenugets.png",
}
//Array number 5
const nuggetsy = {
    codeName: "nuggetsy",
    name: "Nuggetsy 5szt.",
    textPrice: "6,00zł",
    price: 6,
    image: "nuggetsy.png",
}

const kubelek = {
    codeName: "kubelek",
    name: "Kubełek z kurczaka (11szt.) KFC",
    textPrice: "20,00zł",
    price: 20,
    image: "kubelek.png",
}

const stripsy = {
    codeName: "stripsy",
    name: "Stripsy (5szt.) KFC",
    textPrice: "7,50zł",
    price: 7.50,
    image: "stripsy.png",
}
// Array number 6
const pepsi = {
    codeName: "pepsi",
    name: "Pepsi 0,5L",
    textPrice: "6,00zł",
    price: 6,
    image: "pepsi.png",
}

const cocaCola = {
    codeName: "cocaCola",
    name: "Coca-Cola 0,5L",
    textPrice: "6,00zł",
    price: 6,
    image: "coca-cola.png",
}

const sprite = {
    codeName: "sprite",
    name: "Sprite 0,5L",
    textPrice: "5,50zł",
    price: 5.50,
    image: "sprite.png",
}

const mirinda = {
    codeName: "mirinda",
    name: "Mirinda 0,5L",
    textPrice: "5,50zł",
    price: 5.50,
    image: "mirinda.png",
}

const shake = {
    codeName: "shake",
    name: "Shake McDonalds 0,4L",
    textPrice: "8,00zł",
    price: 8,
    image: "shake.jpg",
}

const woda = {
    codeName: "woda",
    name: "Woda mineralna 0,75L",
    textPrice: "3,40zł",
    price: 3.40,
    image: "woda.png",
}

const colaZero = {
    codeName: "colaZero",
    name: "Cola zero 0,5L",
    textPrice: "7,00zł",
    price: 7,
    image: "colazero.png",
}
//Array number 7
const kanapkaPieczenWolowa = {
    codeName: "kanapkaPieczenWolowa",
    name: "Kanapka z pieczenią wołową",
    textPrice: "13,50zł",
    price: 13.50,
    image: "Roast-beef.png",
}

const kanapkaChickenTeriyaki = {
    codeName: "kanapkaChickenTeriyaki",
    name: "Kanapka z kurczakiem Teriyaki",
    textPrice: "15,00zł",
    price: 15,
    image: "chickenteriyaki.png",
}

const serStekKanapka = {
    codeName: "serStekKanapka",
    name: "Kanapka ze stekiem i serem",
    textPrice: "16,00zł",
    price: 16,
    image: "steakcheese.png",
}

//Array number 8
const lody = {
    codeName: "lody",
    name: "Lody w kubeczku",
    textPrice: "6,00zł",
    price: 6,
    image: "lodytruskawkowe.jpg",
}

const lodyWPucharku = {
    codeName: "lodyWPucharku",
    name: "Lody w pucharku",
    textPrice: "15,00zł",
    price: 15,
    image: "lodywpucharku.png",
}

const babeczki = {
    codeName: "babeczki",
    name: "Babeczka",
    textPrice: "2,00zł",
    price: 2,
    image: "babeczki.png",
}
//Array number 9
const salatka = {
    codeName: "salatka",
    name: "Sałatka McDonalds",
    textPrice: "11,50zł",
    price: 11.50,
    image: "salatka.png",
}

const salatkazkurczakiemkfc = {
    codeName: "salatkazkurczakiemkfc",
    name: "Sałatka z kurczakiem KFC",
    textPrice: "12,00zł",
    price: 12,
    image: "salatkazkurczakiemkfc.png",
}


// Rest of code
let productImg = document.querySelectorAll(".productImg");
let productName = document.querySelectorAll(".productName");
let productPrice = document.querySelectorAll(".productPrice");
let firstPrice = document.querySelectorAll(".zlotowki");



//I give a category to every product
let arrayOfProducts = [burgerZKurczakiem, burgerZKurczakiemKentucky, dlugiBurgerZKurczakiemKentucky, kurczakBurger, wiesMac, cheeseburger, hamburger, mcdouble, maleFrytki, srednieFrytki, duzeFrytki, nuggetsy, kubelek, stripsy, wegeBurgerKurczak, wegeNuggetsy, kanapkaPieczenWolowa, kanapkaChickenTeriyaki, serStekKanapka, pepsi, cocaCola, sprite, mirinda, woda, colaZero, shake, lodyWPucharku, lody, babeczki, salatka, salatkazkurczakiemkfc];

let burgeryZKurczakiem = [burgerZKurczakiem, burgerZKurczakiemKentucky, dlugiBurgerZKurczakiemKentucky, kurczakBurger];
let burgeryZWolowina = [wiesMac, cheeseburger, hamburger, mcdouble];
let frytki = [maleFrytki, srednieFrytki, duzeFrytki];
let miesa = [nuggetsy, kubelek, stripsy];
let wege = [wegeBurgerKurczak, wegeNuggetsy];
let kanapki = [kanapkaPieczenWolowa, kanapkaChickenTeriyaki, serStekKanapka];
let napoje = [pepsi, cocaCola, sprite, mirinda, woda, colaZero, shake];
let desery = [lodyWPucharku, lody, babeczki];
let salatki = [salatka, salatkazkurczakiemkfc];
let koszyk = [];

//I create a function that creates new layout for every product
function productsCreation (objectName) {
    let newProduct = document.createElement("div");
    newProduct.className = "product";
    productsSection.appendChild(newProduct);
    let newProductImgDiv = document.createElement("div");
    newProductImgDiv.className = "productImgDiv";
    newProduct.appendChild(newProductImgDiv);
    let newProductImg = document.createElement("img");
    newProductImg.className = "productImg";
    newProductImg.src = objectName.image;
    newProductImgDiv.appendChild(newProductImg);
    let newProductDescription = document.createElement("div");
    newProductDescription.className = "productDescription";
    newProduct.appendChild(newProductDescription);
    let newProductName = document.createElement("div");
    newProductName.className = "productName";
    newProductName.textContent = objectName.name;
    newProductDescription.appendChild(newProductName);
    let newProductPrice = document.createElement("div");
    newProductPrice.className = "productPrice";
    newProductPrice.textContent = objectName.textPrice;
    newProductDescription.appendChild(newProductPrice);
    let newBuyButtonDiv = document.createElement("div");
    newBuyButtonDiv.className = "buyButtonDiv";
    newProduct.appendChild(newBuyButtonDiv);
    let newBuyButton = document.createElement("img");
    newBuyButton.className = "buyButton";
    newBuyButton.src = "add-to-cart.png";
    newBuyButtonDiv.appendChild(newBuyButton);
    newBuyButton.addEventListener("click", addToCart);
}


//I create a function that displays products in the cart after clicking on cart
function cartLayout (objectName) {
    let newProduct = document.createElement("div");
    newProduct.className = "product";
    productsSection.appendChild(newProduct);
    let newProductImgDiv = document.createElement("div");
    newProductImgDiv.className = "productImgDiv";
    newProduct.appendChild(newProductImgDiv);
    let newProductImg = document.createElement("img");
    newProductImg.className = "productImg";
    newProductImg.src = objectName.image;
    newProductImgDiv.appendChild(newProductImg);
    let newProductDescription = document.createElement("div");
    newProductDescription.className = "productDescription";
    newProduct.appendChild(newProductDescription);
    let newProductName = document.createElement("div");
    newProductName.className = "productName";
    newProductName.textContent = objectName.name;
    newProductDescription.appendChild(newProductName);
    let newProductPrice = document.createElement("div");
    newProductPrice.className = "productPrice";
    newProductPrice.textContent = objectName.textPrice;
    newProductDescription.appendChild(newProductPrice);
    let newRemoveButtonDiv = document.createElement("div");
    newRemoveButtonDiv.className = "removeButtonDiv";
    newProduct.appendChild(newRemoveButtonDiv);
    let newRemove = document.createElement("img");
    newRemove.className = "removeButton";
    newRemove.src = "remove-from-cart.png";
    newRemoveButtonDiv.appendChild(newRemove);
    newRemove.addEventListener("click", removeFromCart);
}

//I add event listener to every button, because i want that every button display other category
categoriesLayout(arrayOfProducts);
buttons[0].addEventListener("click", () => cartCategoryLayout(koszyk));
buttons[1].addEventListener("click", () => categoriesLayout(burgeryZKurczakiem));
buttons[2].addEventListener("click", () => categoriesLayout(burgeryZWolowina));
buttons[3].addEventListener("click", () => categoriesLayout(frytki));
buttons[4].addEventListener("click", () => categoriesLayout(wege));
buttons[5].addEventListener("click", () => categoriesLayout(miesa));
buttons[6].addEventListener("click", () => categoriesLayout(napoje));
buttons[7].addEventListener("click", () => categoriesLayout(kanapki));
buttons[8].addEventListener("click", () => categoriesLayout(desery));
buttons[9].addEventListener("click", () => categoriesLayout(salatki));

//I create a function which gets array name and creates layout for category of products that this array has
function categoriesLayout (arrayName) {
    productsSection.innerHTML = "";
    for (let i = 0; i<arrayName.length; i++) {
        productsCreation(arrayName[i]);
    }
}


/*I create a function which gets name of array (in this case this array always will be cart array) and creates cart layout
Main difference between cartLayout function and productsCreation function is icon of cart in the bottom of every product div, in cartLayout the divs has other icon than in productCreation*/

let o;
function cartCategoryLayout (arrayCartName) {
    productsSection.innerHTML = "";
    for (o=0; o<koszyk.length; o++) {
        cartLayout(arrayCartName[o]);
    }
}



//I create variables that hold info about number of product in the cart

let finalPrice = 0;
let itemsNumber = 0;
let basketCounterDiv = document.getElementById("topBasketCounterDiv");
basketCounterDiv.innerHTML = itemsNumber;

let finalPriceInfo = document.getElementById("footerInfo");
let itemsNumberInfo = document.getElementById("BSDFooter");
footerInfo.innerHTML = "Suma:" + " " + finalPrice + "zł";
itemsNumberInfo.innerHTML = itemsNumber;


//I create a function that increments number of product in the cart every time someone clicks icon that adds products to the cart
function addToCart () {
    itemsNumber++;
    itemsNumberInfo.innerHTML = itemsNumber;
    basketCounterDiv.innerHTML = itemsNumber;
    let parentDivButton = this.closest(".product");
    let productDBName = parentDivButton.querySelector(".productName");
    console.log(productDBName.textContent);
    let productWanted = arrayOfProducts.find(product => product.name === productDBName.textContent);
    if (productWanted) {
        koszyk.push(productWanted);
        finalPrice += productWanted.price;
        footerInfo.innerHTML = "Suma:" + " " + finalPrice.toFixed(2) + "zł";
    }
}


/*I create function that removes items from the cart. The function gets first parent with class .product of element that called it, then gets name of product (names are the same/in HTML and js, beacues HTML takes it from data base in this file, so im sure that it will get exact name that i need), then it searchs for this name in data base. If there is
a product that we needed function gets index in array of div that is the closest parent with class .product for "this" element, removes it and decrements number of products in cart
*/

function removeFromCart() {
    this.closest(".product").remove();
    itemsNumber--;
    itemsNumberInfo.innerHTML = itemsNumber;
    basketCounterDiv.innerHTML = itemsNumber;
    let parentDivButton = this.closest(".product");
    let productDBName = parentDivButton.querySelector(".productName");
    console.log(productDBName.textContent);
    let productWanted = arrayOfProducts.find(product => product.name === productDBName.textContent);
    if (productWanted) {
        let indexOfProduct = koszyk.indexOf(productWanted);
        koszyk.splice(indexOfProduct, 1);
        finalPrice -= productWanted.price;
        footerInfo.innerHTML = "Suma:" + " " + finalPrice.toFixed(2) + "zł";
    }
}


/* I create funcionalities that make pay system working, every funcionality is similiar, every of them just switch display of one div to "none" and of other one to "flex" what makes
what creates impresion of completing steps*/

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", closeOrderPanel);

let orderPanelDiv = document.getElementById("orderPanelDiv");
function closeOrderPanel() {
    orderPanelDiv.style.display = "none";
}

let confirmBtn = document.getElementById("confirmBtn");
let order = document.getElementById("order");
order.addEventListener("click", openOrderPanel);
function openOrderPanel () {
    orderPanelDiv.style.display = "flex";
    orderProductsDiv.innerHTML = "";
    if (koszyk.length == 0) {
        orderProductsDiv.style.justifyContent = "center";
        orderProductsDiv.style.alignItems = "center";
        orderProductsDiv.style.fontSize = "28px";
        orderProductsDiv.innerHTML = "Koszyk jest jeszcze pusty.";
        confirmBtn.style.display = "none";
    } else {
        confirmBtn.style.display = "block";
        orderProductsDiv.style.flexDirection = "column";
        orderProductsDiv.style.justifyContent = "start";
        orderProductsDiv.style.alignItems = "start";
        orderProductsDiv.style.fontSize = "16px";
    }
    callGeneratPaymentLayout(koszyk);
}

function callGeneratPaymentLayout (callCartArray) {
    for (let k = 0; k<callCartArray.length; k++) {
        generatePaymentLayout(callCartArray[k]);
    }
}

let confirm = document.getElementById("confirm");
let payment = document.getElementById("payment");
confirm.addEventListener("click", confirmOrder);
function confirmOrder() {
    orderPanelDiv.style.display = "none";
    payment.style.display = "flex";
}

let cardPayment = document.getElementById("cardPayment");
cardPayment.addEventListener("click", payByCard);
function payByCard() {
    payment.style.display = "none";
}

let finalPaymentDiv = document.getElementById("finalPaymentDiv");
let confirmPayment = document.getElementById("cardPayment");
let cancelPayment = document.getElementById("cancelPayment");
let paymentPanel = document.getElementById("payment");
cancelPayment.addEventListener("click", closeCardPayment);
confirmPayment.addEventListener("click", openFinalPayment);
function openFinalPayment () {
    paymentPanel.style.display = "none";
    finalPaymentDiv.style.display = "flex";
    let finalCountdown = document.getElementById("finalPaymentCountdown");
    let countdownNumber = 5;
    finalCountdown.innerHTML = countdownNumber;
    function countdown() {
        countdownNumber--;
        finalCountdown.innerHTML = countdownNumber;
        if (countdownNumber < 0) {
            clearInterval(countdownInterval);
            endAllPayment();
        }
    }
    let countdownInterval = setInterval(countdown, 1000);
}
function closeCardPayment() {
    paymentPanel.style.display = "none";
}

let endPayment = document.getElementById("endPayment");
endPayment.addEventListener("click", endAllPayment);
function endAllPayment () {
    koszyk = [];
    productsSection.innerHTML = "";
    finalPrice = 0;
    footerInfo.innerHTML = "Suma:" + " " + finalPrice.toFixed(2) + "zł";
    itemsNumber = 0;
    itemsNumberInfo.innerHTML = itemsNumber;
    basketCounterDiv.innerHTML = itemsNumber;
    finalPaymentDiv.style.display = "none";
    categoriesLayout(arrayOfProducts);
}


let orderProductsDiv = document.getElementById("orderProductsDiv");


function generatePaymentLayout (cartArray) {
    let newOrderProduct = document.createElement("div");
    newOrderProduct.className = "orderProduct";
    orderProductsDiv.appendChild(newOrderProduct);
    let newOrderProductImgDiv = document.createElement("div");
    newOrderProductImgDiv.className = "orderImgDiv";
    newOrderProduct.appendChild(newOrderProductImgDiv);
    let newOrderImg = document.createElement("img");
    newOrderImg.className = "orderImg";
    newOrderImg.src = cartArray.image;
    newOrderProductImgDiv.appendChild(newOrderImg);
    let newCenterOrderInfo = document.createElement("div");
    newCenterOrderInfo.className = "centerOrderInfo";
    newOrderProduct.appendChild(newCenterOrderInfo);
    let newOrderTitle = document.createElement("h2");
    newOrderTitle.className = "orderTitle";
    newOrderTitle.textContent = cartArray.name;
    newCenterOrderInfo.appendChild(newOrderTitle);
    let sNewCenterOrderInfo = document.createElement("div");
    sNewCenterOrderInfo.className = "centerOrderInfo";
    newOrderProduct.appendChild(sNewCenterOrderInfo);
    let newOrderPrice = document.createElement("h2");
    newOrderPrice.className = "orderPrice";
    newOrderPrice.textContent = cartArray.textPrice;
    sNewCenterOrderInfo.appendChild(newOrderPrice);
    let finalPaymentPrice = document.getElementById("finalPaymentPrice");
    finalPaymentPrice.innerHTML = "Suma:" + " " + finalPrice.toFixed(2) + "zł";
} 