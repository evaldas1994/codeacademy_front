const car = "Toyota";

switch (car) {
    case "BMW":
    case "MB":
    case "Audi":
        document.getElementsByTagName("h1")[0].textContent = "Prabangus automobilis";
        break;
    case "VW":
    case "Toyota":
        document.getElementsByTagName("h1")[0].textContent = "Praktiškas automobilis";
        break;
}