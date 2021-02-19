let year = 2004;
let text1 = "Nekeliamieji metai";
if (year%4 ===0) {
    if (year%100!==0) {
        text1 = "Keliamieji metai";
    }else if (year%400 ===0) {
        text1 = "Keliamieji metai";
    }
}

document.getElementsByTagName("h1")[0].textContent = text1;
