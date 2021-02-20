const price = 6;
const button = document.querySelector("button");

button.addEventListener("click", mainButton);

function mainButton() {
    const newPrice = getPrice();
    showPrice(newPrice);
}

function getPrice() {
    const age = document.querySelector("input").value;

    if ((age !== "") && (age < 120) && (age >= 0 )) {
        if ( age < 16) {
            return price * 0.5;
        } else if (age > 60) {
            return price / 3;
        } else {
            return price;
        }
    }else {
        return -1;
    }
}

function showPrice(newPrice) {
    if (newPrice > 0) {
        console.log("Kaina: " + newPrice + "eur.");
    }else if (newPrice === -1) {
        console.log("Blogai įvestas amžius.");
    }
}