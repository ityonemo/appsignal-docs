import NavigationStore from "./helpers/navigationStore"

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("[data-role~=side-navigation]")
  const navElements = nav.querySelectorAll("h2")

  setCurrentMenu(nav)

  navElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log("click")
      const menuItem = event.target.dataset.menu

      if(NavigationStore.fetch(menuItem)) {
        toggleMenu(element, true)
      } else {
        toggleMenu(element, false)
      }
    })

    if(NavigationStore.fetch(element.dataset.menu)) {
      toggleMenu(element, false)
    } else {
      toggleMenu(element, true)
    }
  })
})

function toggleMenu(element, hidden) {
  NavigationStore.set(element.dataset.menu, !hidden)

  element.parentNode.querySelectorAll("ul").forEach((item) => {
    item.classList.toggle("hidden", hidden)
  })
}

function findParentNode(startingPoint, selector) {
  const el = startingPoint && startingPoint.parentNode

  if(el && (selector.toUpperCase() !== el.nodeName)) {
    return findParentNode(el, selector)
  }
  return el
}

function setCurrentMenu(nav) {
  const parentNode = findParentNode(
    nav.querySelector("[data-behaviour~=active]"),
    "div"
  )

  if(parentNode) {
    const currentMenu = parentNode.querySelector("h2") && parentNode.querySelector("h2").dataset.menu
    if(currentMenu) {
      NavigationStore.set(currentMenu, true)
    }
  }
}
