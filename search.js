let textField = document.getElementById("country")
let searchbut = document.getElementById("searchbutton")
let clear = document.getElementById("newSearchButton")
let result;

function previousSearch() {
  sessionStorage.setItem(search, textField.value)
  const test = document.createElement("p")
  test.textContent = 'Sök: ' + sessionStorage.getItem(search)
  document.getElementById("searchResults").appendChild(test)
}



function search() {
  let name = textField.value.toLowerCase()
  let url = 'https://restcountries.com/v3.1/'
  url += 'name/' + name
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


      }

      previousSearch()
      //funktion för Session Storage

      document.getElementById('searchform').reset()
      // rensar sökfältet efter varje sökning
    })
}


function clearContent() {
  let count = document.querySelectorAll("div.countryBox")

  for (let i = 0; i < count.length; i++) {
    document.querySelector("div.countryBox").remove()
  }
}

searchbut.addEventListener('click', () => {
  search()
})

clear.addEventListener('click', () => {
  clearContent()
})
