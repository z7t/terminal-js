// Bienvenue à ce premier challenge.

// Pour que les resultats soient visible dans le navigateur, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!





//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
const valeu1 = 4
const valeu2 = 5
const sumPouri = valeu1 + valeu2


//Afficher la chaine de caractère suivante en majuscule
const team = 'avengers';
console.log(team.toUpperCase())

//afficher la première lettre de la chaine de caractère suivante
const team2 = 'avengers';
console.log(team2[0])

//afficher la chaine de caractère suivante exepté la première lettre.
const team3 = 'avengers';
console.log(team3.substr(1, team3.length))

//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
const firstName = 'Tony';
const lastName = 'Stark';
console.log(`nom ${firstName} premon: ${lastName}`)


//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
const team4 = 'aveNgers';
//=> Avengers
console.log(team4.charAt(0).toUpperCase() + team4.toLowerCase().slice(1))
//etape 1 recupere la premiere lettre du string
//etape 2 mettre la premiere lettre en majusqule
//etape 3 Mettre la phase en minusqule 
//etape 4 concat le texte sans la premiere
//Pause ! Va boire un café ! Tu le mérites...

//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2
let villes = ["tpjland", "marseillation", "petitvirgule", "fdpville", "villageTPJdelmierda!"];
console.log(villes[3])
villes.push("conard")
villes[2] = null

//Les boucles
//
//Comme tu le sais sans doute, pour parcourir un tableau,
// il faut bBoucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//éléments au carré et afficher le tableau.

const array1 = [2, 4, 8];
array1.forEach((tg) =>{ //faire sa pour chaque element
  console.log(tg**2) //puissance au carré avec ** et l'afficher dans la console
})


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];
let total = 0; //definir une variable avec un nombre
promo.forEach((sa) => {total += sa}); //pour chaque element, ajouter sa a total
console.log(total / promo.length); //deviser total avec le nombre d'element donné
//les conditions

//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

let age = 17
if (age >= 18){
  console.log("peux voter")
}else{
  console.log("peux pas voter")
}
// Afficher la date d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est en 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin

if (new Date().getHours() > 5 && new Date().getHours() < 17){
  console.log("bonjour")
}else{
  console.log("bonsoir")
}
//Va reboir un café ! Bravo
//Et pense à commit ton projet


//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
let valeu1 = 3;
let valeu2 = 4;
const add = (num1, num2) => {
  return num1 + num2
};
const result = add(valeu1, valeu2);




//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

const square = (i) => {
  return i**2
};

console.log(square(44))

// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];

let toupeurcase2 = beatles.map(sala => sala.toUpperCase()) //toupeurcase2 contiendra les nom ne majuscules

//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.
const tab = [-2, 3, 4];
const soustrait = (tableau) => {
 return tableau.map((degar) => --degar); //retourner la valeur de l'instruction en utilisans map et pre-decrement sur chasque element
};
const degar = soustrait(tab) //creation de la variable avec valeur en retour de la fonction soustrai






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {
  let nouw = [] //declaration d'un table de sortie 
 for (const lenup of tableau){
    if (lenup > 0){ //verifie si l'element actuel et a plus de 0
      nouw.push(lenup) //si il est plus grand que 0, le mettre dans larray de retour
    }
 }
 return nouw; //retourner un array avec que des nombre positif
};
const positive = addPositiveNumber(array2) //appel de la fonction et stoquer la valeur retourné dans la variable positive



//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  return (2 * Math.PI * r) //operation et retourne le resulta
};
console.log(périmetreCercle(777))

//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  console.log(word.slice(0, 1).toUpperCase() + word.substr(1, word.length).toLowerCase())
  //1.garde seulement la premiere lettre de la chaine grace a slice(0, 1)
  //2.mettre la seule lettre en majuscule
  //3 concat l'autre partie de la chaine en decoupand la premiere lettre
  //4 finir par passer la method toLowerCase() pour mettre l'autre partie du mot en minuscule
};
capitalize("SimPloN")


//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.

const OddOrEven = ((number) => {
  if (number % 2){
    console.log("impaire")
  }else{
    console.log("paire")
  }
})

//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  let deoce = word.split("") //decoupage de la chaine de charactere et en faire un tableau
  let mathiasreversed = "" //declaration de la variable de sortie
  deoce = deoce.reverse() //inverseé la disposition des index du tableau
  deoce.forEach((leteur) => {
    mathiasreversed += leteur //recomposition du mot a l'envers
  })
  return mathiasreversed //retour du mot a l'envers
};

console.log(reverseWord("mathias777")) //affichage de la valeur retouné

//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];

const sumDesNombres = ((number) => {
  let realnumber = number.map((num) => parseInt(num)) //convertie tous les String en Number de sorte a ne pas le concatener
  let total = 0 //variaible de sortie
  realnumber.forEach((rlnum) => { //boucle pour chaque element de l'array realnumber
        total += rlnum //additionement des nombre et ajour dans la variable
    })
  console.log(total) //afficage du resultat
})