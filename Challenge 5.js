tips15 = total * 0.15

tips20 = total * 0.20

// montant de  275€

let amount = 275


tips= amount >= 50 && amount <= 300 ? console.log(`${tips15}`) : console.log(`${tips20}`)
let total = amount + tips

console.log("La note était de + `${amount}`, le pourboire de `${tips}` et la valeur totale était de `${total}`.")


// montant 40€

let amount2 = 40


tips= amount2 >= 50 && amount2 <= 300 ? console.log(`${tips15}`) : console.log(`${tips20}`)

let total2 = amount2 + tips
console.log("La note était de + `${amount2}`, le pourboire de `${tips}` et la valeur totale était de `${total2}`.")

// montant 430

let amount3 = 430

tips= amount3 >= 50 && amount3 <= 300 ? console.log(`${tips15}`) : console.log(`${tips20}`)
let total3 = amount3 + tips

console.log("La note était de + `${amount3}`, le pourboire de `${tips}` et la valeur totale était de `${total3}`.")