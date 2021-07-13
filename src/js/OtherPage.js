class OtherPage {
  constructor({ router }) {
    this.router = router
  }

  mount() {
    const button = document.querySelector('.other-button')
    button.addEventListener('click', () => {
      this.router.push('main')
    })
  }

  render() {
    return `<span>Mission Complete!</span>
              <span>당신의 점수는 10점입니다.</span>
              <span>단어당 평균 답변 시간은 4초입니다.</span>
              <button type="button" class="other-button">다시 시작</button>
              `
  }
}
