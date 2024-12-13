//Challenge11 : calcul d’IMC 2

/*
Retournons avec Bernard et Marcel qui comparent leurs IMC ! Cette fois-ci, utilisons des objets pour implémenter le calcul.

Rappel : IMC = poids / taille² = poids / (taille * taille)
Tâches :

    Pour chacun, créer un objet avec des propriétés pour leurs prénom, poids et taille.
    Créer une méthode ‘calcBMI’ dans chacun des objets permettant de calculer l’IMC. Stockez la valeur calculée dans une propriété de l’objet et aussi la retourner dans la méthode.
    Afficher dans la console qui a l’IMC le plus élevé de cette manière : “L’IMC de Bernard (20,2) est plus élevé que celui de Marcel (19,3)”

Données de test :

Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.

*/

const imcBernard = {
    name: Bernard,
    weight: 78,
    tall: 1.69,
    calcBMI: function(){

    }
}

const imcMarcel = {
    name: Marcel,
    weight: 92,
    tall: 1.95
}