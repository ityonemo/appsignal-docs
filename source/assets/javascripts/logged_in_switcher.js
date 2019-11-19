import { userSignedIn } from "./helpers/userSignedIn"

document.addEventListener("DOMContentLoaded", () => {
  if(userSignedIn()) {
    const loggedInElements = document.querySelectorAll("[data-role=show-logged-in]")
    const loggedOutElements = document.querySelectorAll("[data-role=show-logged-out]")

    loggedInElements.forEach((item) => {
      item.classList.remove("hidden")
    })

    loggedOutElements.forEach((item) => {
      item.classList.add("hidden")
    })
  }
})
