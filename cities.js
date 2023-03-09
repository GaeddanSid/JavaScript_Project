fetch('https://avancera.app/cities/')
  .then(response => response.json())
  .then(result => {
    console.log(result)

    const output = document.querySelector("main")

    for (let i = 0; i < result.length; i++) {

      const stadsDiv = document.createElement("div")
      stadsDiv.classList.add('countryBox')
      output.appendChild(stadsDiv)

      const town = document.createElement("p")
      town.textContent = 'Stad: ' + result[i].name
      output.appendChild(town)
      stadsDiv.appendChild(town)

      const population = document.createElement("p")
      population.textContent = 'Befolkning: ' + result[i].population
      output.appendChild(population)
      stadsDiv.appendChild(population)

      const id = document.createElement("p")
      id.textContent = 'ID: ' + result[i].id
      output.appendChild(id)
      stadsDiv.appendChild(id)

    }
  })


function addCity() {
  let name = document.getElementById("addTown").value
  let population = document.getElementById("addPop").value
  population = parseInt(population)
  fetch('https://avancera.app/cities/', {
    body: JSON.stringify({ name: name, population: population }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
}

function editCity() {
  var url = ('https://avancera.app/cities/')
  let id = document.getElementById("editId").value
  let name = document.getElementById("editTown").value
  let population = document.getElementById("editPop").value
  population = parseInt(population)

  url += id

  fetch(url, {
    body: JSON.stringify({ name: name, population: population }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH'
  })
    .then(response => {
      console.log(response)
    })
}

function deleteCity() {
  let id = document.getElementById("deleteId").value
  var url = ('https://avancera.app/cities/')
  url += id

  fetch(url, {
    method: 'DELETE'
  }).then(response => {
    console.log(response)
  })

}

function updateResult() {
  window.location.reload()
}
