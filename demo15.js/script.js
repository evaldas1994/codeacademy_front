document.querySelector("h1").addEventListener("click", fn);
function  fn() {
    console.log("h1 clicked");
}

document.querySelector("button").addEventListener("click", button);
function  button() {
    const n1 = Number(document.querySelector("input.number").value);
    if ( n1 > 20) {
        console.log("Galima gerti");
    } else {
        console.log("Nealima gerti");
    }

}





