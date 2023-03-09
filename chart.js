let worldbut = document.getElementById("world")
let europebut = document.getElementById("europe")
let americabut = document.getElementById("americas")
let africabut = document.getElementById("africa")
let asiabut = document.getElementById("asia")
let oceaniabut = document.getElementById("oceania")


function clearContent() {
  document.getElementById("chart-window1").innerHTML = '<canvas id="population"></canvas>';
  document.getElementById("chart-window2").innerHTML = '<canvas id="area"></canvas>';

}
function createClass() {
  document.getElementById("chart-window1").classList.add("chart-window")
  document.getElementById("chart-window2").classList.add("chart-window")
}


async function getData(region) {
  url = region
  const response = await fetch(url)
  const result = await response.json()
  console.log(result)

  console.log(result.length)
  country = []
  labels = []

  for (let i = 0; i < result.length; i++) {

    country.push(result[i].name.common)
    labels.push(result[i].population)
  }

  console.log(country)
  console.log(labels)

  Chart.defaults.color = '#ffffff';

  new Chart(document.getElementById("population"), {
    type: 'bar',
    data: {
      labels: country,
      datasets: [
        {
          label: "Befolkningsmängd",
          country: country,
          backgroundColor: [
            "#ffffff",
            "#3a90cd",
            '#001219',
            '#005F73',
            '#0A9396',
            '#94D2BD',
            '#E9D8A6',
            '#EE9B00',
            '#CA6702',
            '#BB3E03',
            '#AE2012',
            '#9B2226'
          ],
          color: '#ffffff',
          data: labels
        }
      ]
    },
    options: {
      plugins: {

        datasets: {
          font:{
            color: 'white',
          }
        },
        legend: {

          labels: {
            font: {
              size: 20
            },
            color: 'white',
          }
        }
      }
    }

  });
}




async function getArea(region) {
  url = region
  const response = await fetch(url)
  const result = await response.json()
  console.log(result)

  console.log(result.length)
  country = []
  labels = []

  for (let i = 0; i < result.length; i++) {

    country.push(result[i].name.common)
    labels.push(result[i].area)
  }

  console.log(country)
  console.log(labels)

  new Chart(document.getElementById("area"), {
    type: 'pie',
    data: {
      labels: country,
      datasets: [
        {
          label: "Area KM²",
          country: country,
          backgroundColor: [
            "#3a90cd",
            '#001219',
            '#005F73',
            '#0A9396',
            '#94D2BD',
            '#E9D8A6',
            '#EE9B00',
            '#CA6702',
            '#BB3E03',
            '#AE2012',
            '#9B2226'
          ],
          data: labels
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white',
          }
        }
      }
    }

  });
}




worldbut.addEventListener('click', () => {
  clearContent()
  createClass()
  getData('https://restcountries.com/v3.1/all')
  getArea('https://restcountries.com/v3.1/all')
})

europebut.addEventListener('click', () => {
  clearContent()
  createClass()
  getData('https://restcountries.com/v3.1/region/europe')
  getArea('https://restcountries.com/v3.1/region/europe')
})

americabut.addEventListener('click', () => {
  clearContent()
  createClass()
  getData('https://restcountries.com/v3.1/region/americas')
  getArea('https://restcountries.com/v3.1/region/americas')
})

asiabut.addEventListener('click', () => {
  clearContent()
  createClass()
  getData('https://restcountries.com/v3.1/region/asia')
  getArea('https://restcountries.com/v3.1/region/asia')
})

oceaniabut.addEventListener('click', () => {
  clearContent()
  createClass()
  getData('https://restcountries.com/v3.1/region/oceania')
  getArea('https://restcountries.com/v3.1/region/oceania')
})

africabut.addEventListener('click', () => {
  clearContent()
  createClass()
  getData('https://restcountries.com/v3.1/region/africa')
  getArea('https://restcountries.com/v3.1/region/africa')
})
