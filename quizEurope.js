let flagsAndCountry = {}
let newFlag;
let score = 0, result = 0, questionCount = 0

let skipQuestion = document.getElementById("skip")
let answerQuestion = document.getElementById("answer")
let newGame = document.getElementById("newGame")
let textField = document.getElementById("country")
let userInfo = document.getElementById("userInfo")
let formerCountry = document.getElementById("former-country")



fetch('https://restcountries.com/v3.1/region/europe')
  .then((response) => response.json())
  .then((result) => {

    for (let i = 0; i < result.length; i++) {

      let flag = result[i].flags.png
      let country = result[i].name.common

      flagsAndCountry[flag] = country

    }
    console.log(flagsAndCountry)
    getNewCountry()
  })


function getNewCountry() {
  const keys = Object.keys(flagsAndCountry)
  newFlag = keys[Math.floor(Math.random() * keys.length)]
  document.getElementById("flag").src = newFlag
}

function checkUserInput() {

  let userInput = textField.value.toLowerCase()
  let answer = (flagsAndCountry[newFlag]).toLowerCase()

  let correct = userInput === answer
  console.log(userInput, flagsAndCountry, correct)

  document.getElementById('quizForm').reset()

  if (correct) {
    score++
    questionCount++
    formerCountry.textContent = 'Bra jobbat, det var: ' + answer
    userInfo.textContent = 'Poäng: ' + score + ' av ' + questionCount + ' ' + Math.round(((score / questionCount) * 100)) + '%'
    getNewCountry()

  }
  else {
    questionCount++
    formerCountry.textContent = 'Tyvärr, vi sökte: ' + answer
    userInfo.textContent = 'Poäng: ' + score + ' av ' + questionCount + ' ' + Math.round(((score / questionCount) * 100)) + '%'
    getNewCountry()
  }
  if (score >= 3) {
    formerCountry.textContent = 'Bra jobbat, det var: ' + answer
    userInfo.textContent = 'Poäng: ' + score + ' av ' + questionCount
    alert('Grattis! Din poäng: ' + score + ' av ' + questionCount + ' ' + Math.round(((score / questionCount) * 100)) + '%')

    userInfo.textContent = 'Grattis, din poäng: ' + score + ' av ' + questionCount + ' = ' + Math.round(((score / questionCount) * 100)) + '%. Spela ett nytt spel!'

  }
}


answerQuestion.addEventListener('click', checkUserInput)

skipQuestion.addEventListener('click', () => {
  formerCountry.textContent = 'Tyvärr, vi sökte: ' + checkUserInput().answer
  userInfo.textContent = 'Poäng: ' + score + 'av' + questionCount
  getNewCountry()
})

newGame.addEventListener('click', () => {
  refreshPage()
})


function refreshPage() {
  window.location.reload();
}
