const axios = require('axios')

// async function add1(x) {
//   const a = await resolveAfter2Seconds(20)
//   const b = await resolveAfter2Seconds(30)
//   return x + a + b
// }
// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x)
//     }, 2000)
//   })
// }

// console.log(add1(2))

class MainPage {
  constructor({ router }) {
    this.router = router
    this.firstWord = ''
  }

  getWords() {
    try {
      axios
        .get('https://my-json-server.typicode.com/kakaopay-fe/resources/words')
        .then((res) => {
          this.successGetWords(res.data)
        })
        .catch((err) => {
          this.failGetWords(err.message)
        })
    } catch (error) {
      console.error(error)
    }
  }

  successGetWords(data) {
    this.firstWord = data[0]
  }

  failGetWords(message) {
    alert('데이터를 가져오는데 실패하였습니다:' + message)
  }

  mount() {
    this.getWords()
    const button = document.querySelector('.main-button')
    button.addEventListener('click', () => {
      this.router.push('other')
    })
  }

  render() {
    return `<label>남은시간: ${this.firstWord.second}</label>
        <label>점수: 9점</label>
        <span>문제 단어</span>
        <input type='text' placeholder='입력' />
        <button type="button" class="main-button">시작</button>
        `
  }
}
