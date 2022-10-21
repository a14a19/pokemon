const button = document.querySelector(".get-random-charac");
const nameSw = document.getElementById("name");
const heightSw = document.getElementById("height");
const massSw = document.getElementById("mass");
const genderSw = document.getElementById("gender"); 
const homeworldSw = document.getElementById("homeworld");
const speciesSw = document.getElementById("species");
const wikiSw = document.getElementById("wiki");
const birthYear = document.getElementById("birth-year"); 
const trackImg = document.getElementById("trackerImg");
const artWork = document.getElementById('art-work');
const artImg = document.createElement('img');

artWork.appendChild(artImg);

button.addEventListener('click', (e) => {
    e.preventDefault()
    nameSw.innerText = `Loading...`;
    heightSw.innerText = `Loading...`;
    massSw.innerText = `Loading...`;
    genderSw.innerText = `Loading...`;
    speciesSw.innerText = `Loading...`;
    homeworldSw.innerText = `Loading...`;
    wikiSw.innerText = `Loading...`;
    
    const numRandom = `${parseInt(Math.ceil(Math.random()*83))}.json`;
    const urlSw = "https://akabab.github.io/starwars-api/api/id/";

    fetch(`${urlSw}${numRandom}`)
    .then(Response => Response.json())
    .then(character => {
        // console.log(character.name)
        const {name, height, mass, gender, species, homeworld, image, wiki} = character

        if(name, height, mass, gender, species, homeworld, image, wiki == ""){
            throw new Error("Undefined")
        }
        artImg.src = `${image}`;
        artImg.classList.add('art-img')
        nameSw.innerText = `Name: ${name}`;
        heightSw.innerText = `Height: ${height}`;
        massSw.innerText = `Mass: ${mass}`;
        genderSw.innerText = `Gender: ${gender}`;
        speciesSw.innerText = `Species: ${species}`;
        homeworldSw.innerText = `Home World: ${homeworld}`;
        wikiSw.innerText = `Wiki: ${wiki}`;
        wikiSw.href = `${wiki}`;
    })

})

document.addEventListener('mouseover', (e)=>{
    trackImg.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
})
    