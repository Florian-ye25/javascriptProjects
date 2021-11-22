let demandeOperation, premierNombre, deuxiemeNombre, resultat;

do {
    demandeOperation = parseInt(prompt("Quelle opération souhaitez-vous éffectuer ?\n\n"
    + "1 - Addition\n"
    + "2 - Multiplication\n"
    + "3 - Soustraction\n"
    + "4 - Division\n"));
} while (demandeOperation != 1 && demandeOperation != 2 && demandeOperation !=3 && demandeOperation != 4)


do {
    premierNombre = parseFloat(prompt("Quel est votre premier chiffre ou nombre ?"));
} while (isNaN(premierNombre));


do {
    deuxiemeNombre = parseFloat(prompt("Quel est votre deuxième chiffre ou nombre ?"));
} while (isNaN(deuxiemeNombre));


function addition(nombreA, nombreB){
    resultat = nombreA + nombreB;
    return resultat;
}

function multiplication(nombreA, nombreB){
    resultat = nombreA * nombreB;
    return resultat;
}

function soustraction(nombreA, nombreB){
    resultat = nombreA - nombreB;
    return resultat;
}

function division(nombreA, nombreB){
    if(deuxiemeNombre == 0){
        alert("La division par 0 est interdite !");
    }else{
        resultat = nombreA / nombreB;
        return resultat;
    }
}

switch (demandeOperation) {
    case 1: addition(premierNombre, deuxiemeNombre);
        break;
    case 2: multiplication(premierNombre, deuxiemeNombre);
        break;
    case 3: soustraction(premierNombre, deuxiemeNombre);
        break;
    case 4: division(premierNombre, deuxiemeNombre);
        break;

        default: alert("Une erreur est survenue");
        break;
}

if (resultat !== 0) {
    alert("Le résultat est donc impossible à déterminer.");
}else{
    alert("Le résultat de l'opération est " + resultat + ".");
}