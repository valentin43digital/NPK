document.addEventListener("DOMContentLoaded", () => {
  const popupOpenButton = document.getElementById("popup_open_button")
  const popupModal = document.getElementById("popup_modal")
  const popupCloseButton = document.getElementById("popup_close_button")
  const popupForm = document.getElementById("popup_form")

  const togglePopup = () => {
    popupModal.classList.toggle("d-block")
  }

  popupOpenButton.addEventListener("click", togglePopup)
  popupCloseButton.addEventListener("click", togglePopup)

  popupForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(popupForm).entries());

    // отправка данных
    console.log(formData)

    // сброс формы
    popupForm.querySelectorAll("input").forEach(input => {
      input.value = ""
    })


    togglePopup()
  })
})