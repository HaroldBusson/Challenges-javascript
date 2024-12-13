//challenge 6 javascript

let scoreDauphins1 = [44, 23, 71]
let scoreKoalas1 = [65, 54, 49]

let scoreDauphins2 = [85, 54, 41]
let scoreKoalas2 = [23, 34, 27]

// calcul de la moyenne des valeurs 

let calcAverage = arr.reduce((sum, items) => sum + items, 0) / arr.length;

let averageScoreDauphin = calcAverage(scoreDauphins1)
let averageScoreKoala = calcAverage(scoreKoalas1)

let averageScoreDauphin2 = calcAverage(scoreDauphins2)
let averageScoreKoala2 = calcAverage(scoreKoalas2)

// Checkwinner prend en compte les 2 moyennes 

function checkWinner(averageScoreDauphin, averageScoreKoala) {
    if (averageScoreDauphin > 2 * averageScoreKoala) {
        console.log(`L’équipe Dauphin gagne (${averageScoreDauphin} vs ${averageScoreKoala})`)
    } else if (averageScoreKoala > 2 * averageScoreDauphin) {
        console.log(`L’équipe Koala gagne (  ${averageScoreKoala} vs ${averageScoreDauphin})`)
    } else {
        console.log(`Pas d'équipe gagnante`)
    }

}

// Use checkWinner

checkWinner(averageScoreDauphin, averageScoreKoala)
checkWinner(averageScoreDauphin2, averageScoreKoala2)
