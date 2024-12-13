// Challenge 7 : tip calculator 2 Javascript

// fonction caclTip calcul le pourboire selon le montant
function caclTip(note) {
    if (note >= 50 && note <= 300) {
        return 0.15 * note
    } else {
        return 0.20 * note
    }
}

let bills = [125, 555, 44] // montant de chaque facture

let tips = [] // Un tableau vide dans lequel les pourboires seront stockés après le calcul

let totals = [] // Un tableau vide dans lequel les totaux (facture + pourboire) seront stockés.

for (i = 0; i < bills.length; i++) { // i initialiser à 0,  parcourt chaque élément du tableau bills
    tips[i] = caclTip(bills[i])  // la fonction  caclTip est utilisé sur chaque indice du tableau 
    totals[i] = tips[i] + bills[i] // total = chaque tips de chaque facture
}