/* Score Dauphins: 96, 108, 89 / Score Koalas: 88, 91, 110
Score Dauphins: 97, 112, 101 / Score Koalas: 109, 95, 123
Score Dauphins: 97, 112, 101 / Score Koalas: 109, 95, 106
*/

//Score 1

let dauphinsScore1 = [96, 108, 89]
let koalasScore1 = [88, 91, 110]

let dauphinsAverageScore1 = dauphinsScore1[0] + dauphinsScore1[2] + dauphinsScore1[3] / 3
let koalasAverageScore1 = koalasScore1[0] + koalasScore1[1] + koalasScore1[3] / 3

//Average method

if (dauphinsAverageScore1 > koalasAverageScore1 && dauphinsAverageScore1 > 100) {
    console.log("Dauphins win !");
} else if (dauphinsAverageScore1 < koalasAverageScore1 && koalasAverageScore1 > 100) {
    console.log("Koalas wins !")
} else if (dauphinsAverageScore1 == koalasAverageScore1) {
    console.log(Draw)
}


//Score 2

let dauphinsScore2 = [97, 112, 101]
let koalasScore2 = [109, 95, 123]

let dauphinsAverageScore2 = dauphinsScore2[0] + dauphinsScore2[2] + dauphinsScore2[3] / 3
let koalasAverageScore2 = koalasScore2[0] + koalasScore2[1] + koalasScore2[3] / 3

//Average method 2

if (dauphinsAverageScore2 > koalasAverageScore2 && dauphinsAverageScore2 > 100) {
    console.log("Dauphins win !");
} else if (dauphinsAverageScore2 < koalasAverageScore2 && koalasAverageScore2 > 100) {
    console.log("Koalas wins !")
} else if (dauphinsAverageScore2 == koalasAverageScore2) {
    console.log(Draw)
}

//Score 3

let dauphinsScore3 = [97, 112, 101]
let koalasScore3 = [109, 95, 106]

let dauphinsAverageScore3 = dauphinsScore3[0] + dauphinsScore3[2] + dauphinsScore3[3] / 3
let koalasAverageScore3 = koalasScore3[0] + koalasScore3[1] + koalasScore3[3] / 3

//Average method

if (dauphinsAverageScore3 > koalasAverageScore3 && dauphinsAverageScore3 > 100) {
    console.log("Dauphins win !");
} else if (dauphinsAverageScore3 < koalasAverageScore3 && koalasAverageScore3 > 100) {
    console.log("Koalas wins !")
} else if (dauphinsAverageScore3 == koalasAverageScore3) {
    console.log(Draw)
}