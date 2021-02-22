const button = document.querySelector("button");
button.addEventListener("click", showText);

function showText() {
    const n = document.querySelector("input").value;

    let v = "";
    let h = "";
    for (i = 0; i < n; i++) {
        v+="I";
        // document.getElementById("res").innerHTML = v;
    }

    for (i = 0; i < n-1; i++) {
        v+="<br>I";
        // document.getElementById("res").innerHTML += h;
    }

    for (i = 0; i < n-1; i++) {
        v+="I";
        // document.getElementById("res").innerHTML += v;
    }

    document.getElementById("res").innerHTML += v;
}