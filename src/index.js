import { head } from './js/head'
import '@/styles/main.scss'
// import { handleHome } from './js/home'
const { handleStart } = require('./js/start')
// import { handleComplete } from './pages/gameComplete'

const { initialRoutes, historyRouterPush } = require('./router')

const root = document.querySelector('#root')

// initialRoutes(root)

const heading = document.createElement('h1')
heading.textContent = head()

const button = document.createElement('button')
button.appendChild(document.createTextNode('게임시작 화면으로 이동'))
button.addEventListener('click', () => {
  historyRouterPush('/start', root)
  handleStart()
})
root.append(heading)
root.append(button)
