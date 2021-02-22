const button = document.querySelector("button");
button.addEventListener("click", showText);

function showText() {
    const n = document.querySelector("input").value;

    let v = "";
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            v += "*";
        }
        v+="<br>";
    }
    document.getElementById("res").innerHTML = v;
}