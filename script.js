let tg = window.Telegram.WebApp;
let ent = document.getElementById("entb")
let inp = document.getElementById("NameInput")
let minp = document.getElementById("MailInput")
let date = document.getElementById("birthdate")


ent.addEventListener("click", () => {
    let data = {
        name: inp.value || "Имя не указано",
        mail: minp.value || "Почта не указана",
        date: date.value || "Дата не указана"
    }

    tg.sendData(JSON.stringify(data))
    tg.close()
})
