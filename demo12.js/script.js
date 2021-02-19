const cars = ['Opel', 'Ford', 'Audi'];

let i;
for (i = 0; i < cars.length; i++) {
    document.getElementsByTagName("li")[i].textContent = cars[i];
}