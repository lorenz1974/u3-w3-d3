// 1) Quali sono i tipi primitivi principali in TypeScript?
// Risposta:
// I tipi primitivi principali in TypeScript sono:
// - string
// - number
// - boolean
// - null
// - undefined
// 2) Crea tre variabili tipizzate.
var _name = 'Luca';
var age = 30;
var isTrueOrFalse = true;
// 3) Tipizza il parametro della funzione greet.
var greet = function (name) {
    return "Ciao " + name;
};
// 4) Specifica il tipo di ritorno della funzione sum.
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che calcola il prezzo con IVA.
var calculatePriceWithVAT = function (price) {
    var VAT = 0.22;
    return price + price * VAT;
};
// 6) Funzione che concatena due stringhe e restituisce la lunghezza totale.
var concatAndLength = function (str1, str2) {
    return (str1 + str2).length;
};
// 7) Cos'è un Type Union e come si scrive?
// Risposta:
// Un Type Union consente a una variabile di avere più tipi..
// Ad esempio: let value: string | number = "Test";
// 8) Variabile che può contenere un numero, null o undefined.
var options;
// 10) Tipizza l'array di numeri nei due modi possibili.
var numbers = [1, 2, 3]; // Primo modo
var numbers2 = [1, 2, 3]; // Secondo modo
// 11) Tupla con 3 stringhe e 2 numeri.
var tuple = ["uno", "Due", "TRE", 4, 5];
var students = [
    { studName: 'Marco', grade: 9 },
    { studName: 'Anna', grade: 8 },
    { studName: 'Luca', grade: 5 }
];
// 17) Oggetto che implementa l'interfaccia Auto.
var myCar = {
    wheels: 4,
    brand: "Tesla",
    isElectric: true
};
// Esempio di utilizzo:
var response = {
    status: "success",
    data: "Operazione completata",
    error: 0,
};
