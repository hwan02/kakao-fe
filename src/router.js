// const homeTemplate = require('./pages/home.hbs')
const gameStartTemplate = require('./pages/gameStart.hbs')
const gameCompleteTemplate = require('./pages/gameComplete.hbs')

// const Home = homeTemplate()
const Start = gameStartTemplate()
const Complete = gameCompleteTemplate()

const routes = {
  // '/': Home,
  '/start': Start,
  '/complete': Complete,
}

const initialRoutes = (element) => {
  renderHTML(element, routes['/'])

  window.onpopstate = () =>
    renderHTML(element, routes[window.location.pathname])
}

const historyRouterPush = (pathName, element) => {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(element, routes[pathName])
}

const renderHTML = (element, route) => {
  element.innerHTML = route
}

module.exports = {
  initialRoutes,
  historyRouterPush,
}
