let demandeOperation;

do {
    demandeOperation = prompt("Quelle opération souhaitez-vous éffectuer ?\n\n"
    + "1 - Addition\n"
    + "2 - Multiplication\n"
    + "3 - Soustraction\n"
    + "4 - Division\n");
} while (demandeOperation != 1 && demandeOperation != 2 && demandeOperation !=3 && demandeOperation != 4)

do {
    premierNombre = prompt("Quel est votre premier chiffre ou nombre ?");
} while (isNaN(premierNombre) || premierNombre == null || premierNombre == "" || premierNombre == " ");

do {
    deuxiemeNombre = prompt("Quel est votre deuxième chiffre ou nombre ?");
} while (isNaN(deuxiemeNombre) || deuxiemeNombre == null || deuxiemeNombre == "" || deuxiemeNombre == " ");

switch (demandeOperation) {
    case 1: addition();
        break;
    case 2: multiplication();
        break;
    case 3: soustraction();
        break;
    case 4: division();
        break;

        default: alert("Cette opération n'est pas disponible");
        break;
}

function addition(nombreA, nombreB){
    let resultat = nombreA + nombreB;
    return resultat;
}

function multiplication(nombreA, nombreB){
    let resultat = nombreA * nombreB;
    return resultat;
}

function soustraction(nombreA, nombreB){
    let resultat = nombreA - nombreB;
    return resultat;
}

function division(nombreA, nombreB){
    if(nombreA == 0 || nombreB == 0){
        alert("Vous ne pouvez pas diviser par 0 !");
    }else{
        let resultat = nombreA / nombreB;
        return resultat;
    }
}