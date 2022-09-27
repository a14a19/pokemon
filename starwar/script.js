const nameSw = document.getElementById("name");
const heightSw = document.getElementById("height");
const massSw = document.getElementById("mass");
const homeworld = document.getElementById("homeworld");
const hairColor = document.getElementById("hair-color");
const button = document.querySelector(".get-random-charac");
const skinColor = document.getElementById("skin-color");
const birthYear = document.getElementById("birth-year"); 
const genderSw = document.getElementById("gender"); 
const trackImg = document.getElementById("trackerImg");



button.addEventListener('click', (e) => {
    e.preventDefault()
    nameSw.innerText = `Loading...`;
    heightSw.innerText = `Loading...`;
    massSw.innerText = `Loading...`;
    hairColor.innerText = `Loading...`;
    EyeColor.innerText = `Loading...`;
    skinColor.innerText = `Loading...`;
    birthYear.innerText = `Loading...`;
    genderSw.innerText = `Loading...`;
    
    const numRandom = parseInt(Math.ceil(Math.random()*83));

    const urlSw = "https://swapi.dev/api/people/";

    fetch(`${urlSw}${numRandom}`)
    .then(Response => Response.json())
    .then(character => {
        // console.log(character.name)

        const {name, height, mass, hair_color, eye_color, skin_color, birth_year, gender} = character

        if(name, height, mass, hair_color, eye_color, skin_color, birth_year, gender == ""){
            throw new Error("Undefined")
        }

        nameSw.innerText = `Name: ${name}`;
        heightSw.innerText = `Height: ${height}`;
        massSw.innerText = `Mass: ${mass}`;
        hairColor.innerText = `Hair color: ${hair_color}`;
        EyeColor.innerText = `Eye Color: ${eye_color}`;
        skinColor.innerText = `Skin color: ${skin_color}`;
        birthYear.innerText = `Birth year: ${birth_year}`;
        genderSw.innerText = `Gender: ${gender}`;
    })
    
})

document.addEventListener('mouseover', (e)=>{
    trackImg.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
})
    