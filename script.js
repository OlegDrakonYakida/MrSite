let tg = window.Telegram.WebApp;
let ent = document.getElementById("entb")
let inp = document.getElementById("NameInput")
let minp = document.getElementById("MailInput")


ent.addEventListener("click", () => {
    let data = {
        name: inp.value,
        mail: minp.value
    }

    tg.sendData(JSON.stringify(data))
    tg.close()
})
