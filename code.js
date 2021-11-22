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

function addition(nombreA, nombreB){
    let result = nombreA + nombreB;
    return result;
}

function multiplication(nombreA, nombreB){
    let result = nombreA * nombreB;
    return result;
}

function soustraction(nombreA, nombreB){
    let result = nombreA - nombreB;
    return result;
}

function division(nombreA, nombreB){
    if(nombreA == 0 || nombreB == 0){
        alert("Vous ne pouvez pas diviser par 0 !");
    }else{
        let result = nombreA / nombreB;
        return result;
    }
}