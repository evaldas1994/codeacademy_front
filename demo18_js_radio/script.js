const button = document.querySelector("button");
button.addEventListener("click", showDataToConsole);
function  showDataToConsole() {

    const age = Number(document.querySelector("input").value);
    const gender = document.querySelector("input:checked").value;

    if ((age !== null) && (age < 120) && (age > 0) )
    {
        if (gender !== null)
        {
            console.log("Amžius: " + age + ", o lytis: " + (gender === "male" ? "vyras" : (gender === "female" ? "moteris" : "kita")));

        }else {
            console.log("Pažymėkite lytį.")
        }
    } else {
        console.log("Įveskite tinkamą amžių.")
    }

}








