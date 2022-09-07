const name = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type = document.getElementById("type");
const abilities = document.getElementById("abilities");
const button = document.querySelector(".get-random-charac");
const moves = document.getElementById("moves");
const artWork = document.getElementById("art-work"); 

button.addEventListener('click', (e) => {
    e.preventDefault()
    artWork.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    name.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    height.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    weight.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    type.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    moves.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    abilities.innerHTML = `${'<div class="loading starwar-icon"> <img src="https://flyclipart.com/thumb2/pokemon-logo-png-179203.png" alt="StarWar/> </div>'}`;
    
    const numRandom = parseInt(Math.ceil(Math.random()*905));

    const urlSw = "https://pokeapi.co/api/v2/pokemon/";

    fetch(`${urlSw}${numRandom}`)
        .then(Response => Response.json())
        .then(character => {
            // console.log(character)
            artWork.innerHTML = `<img src="${character.sprites['other']['official-artwork']['front_default']}" alt="Art work" class="artwork">`;
            name.innerHTML = `Name: ${character['name']}`;
            height.innerHTML = `Height: ${character['height']}`;
            weight.innerHTML = `Weight: ${character['weight']}`;
            type.innerHTML = `Type: ${character.types['0']['type']['name']}`;
            moves.innerHTML = `Moves: ${character.moves['0']['move']['name']}, ${character.moves['1']['move']['name']}, ${character.moves['2']['move']['name']}, ${character.moves['3']['move']['name']}, ${character.moves['4']['move']['name']}, ${character.moves['5']['move']['name']}, ${character.moves['6']['move']['name']}, ${character.moves['7']['move']['name']}, ${character.moves['8']['move']['name']}, ${character.moves['9']['move']['name']}, ${character.moves['10']['move']['name']}`;
            abilities.innerHTML = `Abilities: ${character.abilities['0']['ability']['name']}`;
            
        })
})