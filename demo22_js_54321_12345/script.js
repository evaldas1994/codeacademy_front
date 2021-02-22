const button = document.querySelector("button");
button.addEventListener("click", showText);

function showText() {
    let n = document.querySelector("input").value;

    let v = "";
    nn = n;
    for (i = 0; i < n; i++) {
        for (j=0; j<nn; j++) {
            v+=j+1+ " ";
        }
        nn--;
        v+="<br>";

    }

    v+="<br>";


    for (i = 0; i <= n; i++) {
        for (j=0; j<nn; j++) {
            v+=j+1+ " ";
        }
        nn++;
        v+="<br>";

    }
    document.getElementById("res").innerHTML = v;
}