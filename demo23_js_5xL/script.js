const button = document.querySelector("button");
button.addEventListener("click", showText);

function showText() {
    let n = document.querySelector("input").value;

    let v = "";
    for (i = 0; i < n-1; i++) {
        v += "L<br>";
    }
    for (j = 0; j < n; j++) {
        v += "L";
    }

    document.getElementById("res").innerHTML = v;
}