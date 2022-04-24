// Tanımlamalar
let myClock = document.querySelector("#myClock");
let myName = document.querySelector("#myName");
let name_input = prompt("Adinizi giriniz.");

// Regex Ilk Harf Buyutme Fonksiyonu
function capitalize(word) {
    return word
        .toLowerCase()
        .replace(/\w/, firstLetter => firstLetter.toUpperCase());
}

// Ismi HTML e yazdırma
myName.innerHTML = `${capitalize(name_input)}`

//Saat
function updateClock() {
    let today = new Date()
    let days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"]
    let time =
        (today.getHours() < 10 ? '0' + today.getHours() : today.getHours())
        + ":"
        + (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())
        + ":"
        + (today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds())
        + " "
        + days[today.getDay()];
    myClock.innerHTML = `${time}`;
    setTimeout(updateClock, 1000);
}
updateClock();

