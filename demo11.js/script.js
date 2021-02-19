const name = "Evaldas";
const age = 26;

console.log("Labas, mano vardas " + name + " ir man yra " + age + " metų.");

document.getElementsByTagName("h1")[0].textContent = "Labas, aš mokausi JS.";

const car = "Ford";

if(car.length > 3) {
    document.getElementsByTagName("p")[0].textContent = "ilgas pavadinimas";
} else {
    document.getElementsByTagName("p")[0].textContent = "trumpas pavadinimas";
}
