let successList = []

let getWordsList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/kakaopay-fe/resources/words`,
      options
    )
    return await response.json()
  } catch (err) {
    console.log('데이터를 불러올 수 없습니다.', err)
  }
}

let Start = {
  render: async () => {
    let words = await getWordsList()
    let firstWord = words ? words[0] : ''
    let view = `
            <section class="section">
                <h1> 게임화면 </h1>
                  <div id='leftSecond'>남은시간: ${firstWord.second}</div>
                  <div id='point'>점수: ${words.length}</div>
                  <div id='word'>${firstWord.text}</div>
                  <input
                    type='text'
                    class='border border-grey-light w-full p-3 rounded mb-4'
                    id='answer'
                    placeholder='입력'
                  />
                  <button
                    type='button'
                    id='submit'
                    class='w-full text-center py-3 rounded bg-black text-white my-1 hover:bg-gray-600 focus:outline-none'
                  ><a class='border-b-2' id='buttonA' >
                      시작
                    </a></button>
                <ul>
                    ${words
                      .map(
                        (word) =>
                          `<li><a href="#/p/${word.second}">${word.text}</a></li>`
                      )
                      .join('\n ')}
                </ul>
            </section>
        `
    return view
  },
  after_render: async () => {
    document.getElementById('answer').addEventListener('keypress', (e) => {
      const answer = document.querySelector('#answer').value
      if (e.keyCode == '13') {
        if (e.target.value == answer) {
          document.querySelector('#answer').value = ''
          successList.add(answer)
        }
      }
    })

    document.getElementById('submit').addEventListener('click', (e) => {
      e.target.innerText === '초기화'
        ? (document.querySelector('#submit').innerText = '시작')
        : (document.querySelector('#submit').innerText = '초기화')
    })
  },
}

export default Start
