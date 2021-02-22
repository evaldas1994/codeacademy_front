const button = document.querySelector("button");
button.addEventListener("click", showText);

function showText() {
    const n = document.querySelector("input").value;

    let result = "";
    for (i = 0; i < n; i++) {
        result+="Evaldas";
    }
    console.log(result);
    document.querySelector("p").textContent = result;
}