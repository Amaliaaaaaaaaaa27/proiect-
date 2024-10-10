let numberRandom = (Math.random() * 3) + 1;
//deoarece 0.9*3
let transformareInNumarIntreg = Math.floor(numberRandom);
let poza = "./assets/" + transformareInNumarIntreg + ".jpg"
// practic se selectează imaginea din indexul 0 și se schimbă cu imaginea generată aleatoriu folosind setAttribute.

let imagine1 = document.querySelectorAll("img")[0];
imagine1.setAttribute("src", poza);

let numberRandom1 = (Math.random() * 3) + 1;
//deoarece 0.9*3
let transformareInNumarIntreg1 = Math.floor(numberRandom1);
let poza1 = "./assets/" + transformareInNumarIntreg1 + ".jpg"
// practic se selectează imaginea din indexul 0 și se schimbă cu imaginea generată aleatoriu folosind setAttribute.

let imagine2 = document.querySelectorAll("img")[1];
imagine2.setAttribute("src", poza1);


let numberRandom2 = (Math.random() * 3) + 1;
//deoarece 0.9*3
let transformareInNumarIntreg2 = Math.floor(numberRandom2);
let poza2= "./assets/" + transformareInNumarIntreg2 + ".jpg"
// practic se selectează imaginea din indexul 0 și se schimbă cu imaginea generată aleatoriu folosind setAttribute.

let imagine3 = document.querySelectorAll("img")[2];
imagine3.setAttribute("src", poza2);

let numere = `${transformareInNumarIntreg}-${transformareInNumarIntreg1}-${transformareInNumarIntreg2}`;
console.log(numere); // Verifică combinația generată

switch (numere) {
    case "1-1-1":
        document.querySelector("h1").innerHTML = " Egalitate!";
        break;
    case "2-2-2":
        document.querySelector("h1").innerHTML = "Egalitate!";
        break;
    case "3-3-3":
        document.querySelector("h1").innerHTML = "Egalitate!";
        break;
    
    case "1-2-2":
    case "2-1-2":
    case "2-2-1":
        document.querySelector("h1").innerHTML = "Player-ul ce a ales foarfeca a castigat!";      
        break;
        
    case "2-3-3":
    case "3-2-3":
    case "3-3-1":
   document.querySelector("h1").innerHTML = "Player-ul ce a ales hartia a castigat!";      
   break;

    case "3-1-1":
    case "1-3-1":
    case "1-1-3":
   document.querySelector("h1").innerHTML = "Player-ul ce a ales foarfeca a castigat!";      
   break;
    
}














