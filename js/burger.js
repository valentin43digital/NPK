document.addEventListener("DOMContentLoaded", () => {
  const burgerOpenButton = document.getElementById("burger_open_button")
  const burgerModal = document.getElementById("burger_modal")
  const burgerCloseButton = document.getElementById("burger_close_button")

  const toggleMenu = () => {
    burgerModal.classList.toggle("d-block")
  }

  burgerOpenButton.addEventListener("click", toggleMenu)
  burgerCloseButton.addEventListener("click", toggleMenu)


  document.querySelectorAll(".accordion-item").forEach(item => {
    item.querySelector(".accordion-button").addEventListener("click", e => {
      e.currentTarget.classList.toggle("collapsed")
      item.querySelector(".accordion-body").classList.toggle("show")
    })
  })
})