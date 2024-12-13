// Challenge 9

// Welcome to DonkeyDecode, your mission is to decode the full message. Good luck

// EX 01 -  Use a loop to remove the 'X' and use console.log to reveal the message 
const hiddenMessage = ["X", "X", "X", "X", "W", "X", "E",  "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", " ","X", "X", "X", "X", "X", "X", "X", "X", "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ",", "X", " ", "X"]

for (let i = 0; i < hiddenMessage.length; i++) { if (hiddenMessage[i] === 'X') continue; console.log(hiddenMessage[i]); } // Instruction continue : Si c'est le cas, l'instruction continue est exécutée, ce qui fait que l'itération actuelle est ignorée et que la boucle passe à l'itération suivante.

/* Le message est : WELDONE */


// EX 02 - Remove the 'X' and the even numbers
// Hint: As this is a string you should find a way to convert into an array.
// Your code goes here
const hiddenCode = "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX"

const arrHiddenCode = hiddenCode.split("")

    for (let i = 0; i < arrHiddenCode.length; i++) {
        
        if (arrHiddenCode[i] === 'X') continue; // Ignorer les "X"
        
        
        const num = parseInt(arrHiddenCode[i]); // Vérifier si le caractère est un chiffre
    
        
        if (!isNaN(num) && num % 2 === 0) continue; // Si c'est un chiffre et qu'il est pair, on passe à l'itération suivante
        
        
        console.log(arrHiddenCode[i]); // Affiche le caractère qui n'est ni "X" ni un nombre pair
    }

/* Le message est : 
C
O
D
E
 
:
0
2
2
2
4
6
6
2
8
8
4
6
4
2
4
6
2
2
4

*/


