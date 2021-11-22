let demandeOperation, premierNombre, deuxiemeNombre, resultat;
let restart = false;

do{
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
            throw new Error("Impossible de diviser par 0.");
        }else{
            resultat = nombreA / nombreB;
            return resultat;
        }
    }

    try{
        switch (demandeOperation) {
            case 1: addition(premierNombre, deuxiemeNombre);
                break;
            case 2: multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3: soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4: division(premierNombre, deuxiemeNombre);
                break;
            default:
                throw new Error("Une erreur est survenue.");
        }
        alert("Le résultat de l'opération est " + resultat + ".");
    }catch (error) {
        alert(error);
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?"); 
    // On demande grâce à la boîte de dialogue confirm() 
    // si l'utilisateur veut recommencer
} while(restart);
