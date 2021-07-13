const wordUrl =
  'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

const getWords =
  // 데이터 검증
  fetch(wordUrl)
    .then((response) => {
      return response.json()
    })
    .then((data) => setSecondAndText(data))
    .catch((e) => {
      console.log('데이터를 불러올 수 없습니다.' + e)
    })

const setSecondAndText = (data) => {
  // const point = document.querySelector('#point')
  // point.innerHTML = data.length
  // console.log(data)
  // console.log(data.length)
  // getWords.
  // document.querySelector('#leftTime').value =
}

const handleStart = () => {
  const point = document.querySelector('#point')
  const leftSecond = document.querySelector('#leftSecond')
  const answer = document.querySelector('#answer')
  answer.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value)
    }
  })
  document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.value)
    e.target.value === '시작'
      ? (document.querySelector('#buttonA').value = '초기화')
      : (document.querySelector('#buttonA').value = '시작')
    document.querySelector('#answer').value = ''
  })
}

module.exports = {
  handleStart,
}
