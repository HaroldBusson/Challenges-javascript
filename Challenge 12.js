/*
Challenge12 : Evelyn Deliapp

J’ai un tableau avec les températures maximum des prochains jours en entrée de mon programme. Pour chaque température ex [17, 21], je veux afficher dans la console “17 degrés dans 1 jour”, “21 degrés dans 2 jours”.
Données de test :

    [17, 21, 23]
    [12, 5, -5, 0, 4]
*/

let temp1 = [17, 21, 23]
for (i=0; i< temp1.length; i++){
    console.log(` Il fera ${temp1[i]} degré dans un jour ${i+1}`)
}

let temp2 = [12, 5, -5, 0, 4]

for (i=0; i< temp2.length; i++){
    console.log(`Il fera ${temp2[i]} degré dans un jour ${i+1}`)
}