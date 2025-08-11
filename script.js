let tg = window.Telegram.WebApp;
let sendDataButton = document.getElementById("sendButton")
let form = document.getElementById("registration")

sendDataButton.addEventListener("click", (e) => {
    e.preventDefault()
    let registrationData = new FormData(form)
    let data = {
        name: registrationData.get("UserName") || "Имя не указано",
        mail: registrationData.get("UserBirthday") || "Почта не указана",
        date: registrationData.get("UserMail") || "Дата не указана",
        question: registrationData.get("question") || "Ответ не получен"
    }

    tg.sendData(JSON.stringify(data))
    tg.close()
})
