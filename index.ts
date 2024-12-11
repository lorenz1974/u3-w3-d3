// 1) Quali sono i tipi primitivi principali in TypeScript?
// Risposta:
// I tipi primitivi principali in TypeScript sono:
// - string
// - number
// - boolean
// - null
// - undefined


// 2) Crea tre variabili tipizzate.
const _name: string = 'Luca';
const age: number = 30;
const isTrueOrFalse: boolean = true;

// 3) Tipizza il parametro della funzione greet.
const greet = (name: string) => {
    return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della funzione sum.
const sum = (a: number, b: number): number => {
    return a + b;
};

// 5) Crea una funzione che calcola il prezzo con IVA.
const calculatePriceWithVAT = (price: number): number => {
    const VAT: number = 0.22;
    return price + price * VAT;
};

// 6) Funzione che concatena due stringhe e restituisce la lunghezza totale.
const concatAndLength = (str1: string, str2: string) => {
    return (str1 + str2).length;
};

// 7) Cos'è un Type Union e come si scrive?
// Risposta:
// Un Type Union consente a una variabile di avere più tipi..
// Ad esempio: let value: string | number = "Test";

// 8) Variabile che può contenere un numero, null o undefined.
let options: number | null | undefined;

// 9) Tipo per rappresentare i giorni della settimana.
type WeekDay = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza l'array di numeri nei due modi possibili.
const numbers: number[] = [1, 2, 3]; // Primo modo
const numbers2: Array<number> = [1, 2, 3]; // Secondo modo

// 11) Tupla con 3 stringhe e 2 numeri.
const tuple: [string, string, string, number, number] = ["uno", "Due", "TRE", 4, 5];

// 12) Differenza tra type e interface.
// Risposta:
// - 'type' può rappresentare tipi primitivi, union, tuple e altro.
// - 'interface' è la definzizione dell'insieme di tipi che compongono le proprietà di un oggetto

// 13) Interfaccia per un oggetto con firstname, lastname, e age.
interface Person {
    firstname: string;
    lastname: string;
    age: number;
}

// 14) Interfaccia per un utente con email obbligatoria e telefono opzionale.
interface User {
    email: string;
    phone?: string;
}

// 15) Array di oggetti "Studente" con nome e voto.
interface Student {
    studName: string;
    grade: number;
}
const students: Student[] = [
   { studName: 'Marco', grade: 9 },
   { studName: 'Anna', grade: 8 },
   { studName: 'Luca', grade: 5 }
];

// 16) Interfaccia base "Veicolo" e estensione "Auto".
interface Vehicle {
    wheels: number;
    brand: string;
}
interface Car extends Vehicle {
    isElectric: boolean;
}

// 17) Oggetto che implementa l'interfaccia Auto.
const myCar: Car = {
    wheels: 4,
    brand: "Tesla",
    isElectric: true
};

// 18) Cosa sono i Generics in TypeScript?
// Risposta:
// I Generics consentono di creare componenti riutilizzabili che funzionano con tipi diversi.
// Ad esempio: function identity<T>(arg: T): T { return arg; }

// 19) È possibile avere più tipi generici in una funzione?
// Risposta:
// Sì

// 20) Interfaccia generica per una risposta API.
interface ApiResponse<T, U> {
    status: string;
    data: T;
    error?: U;
}
// Esempio di utilizzo:
const response: ApiResponse<string, number> = {
    status: "success",
    data: "Operazione completata",
    error: 0,

};
