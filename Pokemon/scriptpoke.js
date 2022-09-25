const nameP = document.getElementById("name");
const heightP = document.getElementById("height");
const weightP = document.getElementById("weight");
const typeP = document.getElementById("type");
const abilitiesP = document.getElementById("abilities");
const button = document.querySelector(".get-random-charac");
const movesP = document.getElementById("moves");
const artWorkP = document.getElementById("art-work");
const artImg = document.createElement("img"); 


button.addEventListener('click', (e) => {
    e.preventDefault()
    // artImg.src = `Loading...`;
    nameP.innerText = `Loading...`;
    heightP.innerText = `Loading...`;
    weightP.innerText = `Loading...`;
    typeP.innerText = `Loading...`;
    movesP.innerText = `Loading...`;
    abilitiesP.innerText = `Loading...`;
    
    const numRandom = parseInt(Math.ceil(Math.random()*905));

    const urlSw = "https://pokeapi.co/api/v2/pokemon/";

    fetch(`${urlSw}${numRandom}`)
    .then(Response => Response.json())
    .then(character => {
        // console.log(character)

        const {sprites: {other: other}, name, height, weight, types, moves, abilities} = character;

        artImg.src = `${other['official-artwork']['front_default']}`;
        artImg.classList = "artwork";
        nameP.innerText = `Name: ${name}`;
        heightP.innerText = `Height: ${height}`;
        weightP.innerText = `Weight: ${weight}`;
        typeP.innerText = `Type: ${types['0'].type.name}`;
        movesP.innerText = `Moves: ${moves['0']['move']['name']}, ${character.moves['1']['move']['name']}, ${character.moves['2']['move']['name']}, ${character.moves['3']['move']['name']}, ${character.moves['4']['move']['name']}, ${character.moves['5']['move']['name']}, ${character.moves['6']['move']['name']}, ${character.moves['7']['move']['name']}, ${character.moves['8']['move']['name']}, ${character.moves['9']['move']['name']}, ${character.moves['10']['move']['name']}`;
        abilitiesP.innerText = `Abilities: ${abilities['0']['ability']['name']}`;
    })

})

artWorkP.appendChild(artImg);