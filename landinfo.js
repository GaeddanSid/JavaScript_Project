let worldbut = document.getElementById("world")
let europebut = document.getElementById("europe")
let americabut = document.getElementById("americas")
let africabut = document.getElementById("africa")
let asiabut = document.getElementById("asia")
let oceaniabut = document.getElementById("oceania")


function clearContent() {
  let count = document.querySelectorAll("div.countryBox")

  for (let i = 0; i < count.length; i++) {
    document.querySelector("div.countryBox").remove()
  }

}

function worldInfo(continent) {
  url = continent
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)


      const output = document.querySelector("main")

      for (let i = 0; i < result.length; i++) {

        const landDiv = document.createElement("div")
        landDiv.classList.add('countryBox')
        output.appendChild(landDiv)

        const img = document.createElement("img")
        img.src = result[i].flags.png
        img.alt = result[i].name.common
        output.appendChild(img)
        landDiv.appendChild(img)

        const country = document.createElement("p")
        country.textContent = 'Land: ' + result[i].name.common
        output.appendChild(country)
        landDiv.appendChild(country)


        const capital = document.createElement("p")
        capital.textContent = 'Huvudstad: ' + result[i].capital
        output.appendChild(capital)
        landDiv.appendChild(capital)

        const population = document.createElement("p")
        output.appendChild(population)
        population.textContent = 'Befolkning: ' + result[i].population
        landDiv.appendChild(population)


        let lang = result[i].languages
        const languages = document.createElement("p")
        output.appendChild(languages)
        landDiv.appendChild(languages)
        languages.textContent = 'Språk: ' + Object.values(lang)

        if (url === 'https://restcountries.com/v3.1/all') {

          const continents = document.createElement("p")
          continents.textContent = 'Kontinent: ' + result[i].continents
          output.appendChild(continents)
          landDiv.appendChild(continents)
        }

      }
    })
}

worldbut.addEventListener('click', () => {
  clearContent()
  worldInfo('https://restcountries.com/v3.1/all')
})

europebut.addEventListener('click', () => {
  clearContent()
  worldInfo('https://restcountries.com/v3.1/region/europe')
})

americabut.addEventListener('click', () => {
  clearContent()
  worldInfo('https://restcountries.com/v3.1/region/americas')
})

asiabut.addEventListener('click', () => {
  clearContent()
  worldInfo('https://restcountries.com/v3.1/region/asia')
})

oceaniabut.addEventListener('click', () => {
  clearContent()
  worldInfo('https://restcountries.com/v3.1/region/oceania')
})

africabut.addEventListener('click', () => {
  clearContent()
  worldInfo('https://restcountries.com/v3.1/region/africa')
})
