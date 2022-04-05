const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex", 
    "Dilophosaurus"
];

function seeDinos(i, ...x){
    console.log(i);
    console.log(x);
};
seeDinos(...jPDinos);
// or
seeDinos("Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus")



const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
};
seeCharacters(jPCharacters);
//or
//seeCharacters = ({ellieSattler}) => console.log(ellieSattler);


//Bonus 
const jurassicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];

// const [{one, two, three}, {four, five, six}] = jurrasicParkMovies;
// const allMovies = [one, two, three, four, five, six];
// seeJPMovies = y => {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }
// seeJPMovies(allMovies);

function seeJPMovies([{one, two, three}]){
    console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 console.log(five);
 console.log(six);
}
seeJPMovies(jurrasicParkMovies);