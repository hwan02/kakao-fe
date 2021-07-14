import Start from './js/start.js'
import Complete from './js/complete.js'
import Error404 from './js/error404.js'

import Router from './router.js'

const routes = {
  '/': Start,
  '/complete': Complete,
}

const router = async () => {
  const content = document.getElementById('page_container')

  let request = Router.parseRequestURL()

  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? '/' + request.verb : '')

  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  content.innerHTML = await page.render()
  await page.after_render()
}

window.addEventListener('hashchange', router)

window.addEventListener('load', router)
