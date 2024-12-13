// Challenge 8 : tip calculator 3.0
 /*
Tâches :

    Créer un tableau de notes qui contient toutes les notes des données de tests en dessous.
    Créer un tableau pour les pourboires et les totaux (‘tips’ et ‘totals’).
    Utilisez la fonction ‘calcTip’ que vous aviez codée précédemment pour calculer le pourboire et le total pour chaque note et les mettre dans leurs tableaux correspondants.
    Bonus : Écrire une fonction ‘calcAverage’ qui prend un tableau comme argument et qui calcule la moyenne de tous les nombres du tableau. Écrire dans la console la moyennes des totaux.
*/

notes = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

tips = []
totals = []

    // fonction caclTip calcul le pourboire selon le montant
    function caclTip(note) {
        if (note >= 50 && note <= 300) {
            return 0.15 * note
        } else {
            return 0.20 * note
        }
    }

    for (i = 0; i < bills.length; i++) { // i initialiser à 0,  parcourt chaque élément du tableau bills
    tips[i] = caclTip(bills[i])  // la fonction  caclTip est utilisé sur chaque indice du tableau 
    totals[i] = tips[i] + bills[i] // total = chaque tips de chaque facture
}

    // fonction calcAverage

   let calcAverage = arr.reduce((sum, items) => sum + item, 0) / arr.length;

    console.log(`La moyenne des totaux est de :${calcAverage(totals)}`)
