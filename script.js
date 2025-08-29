let tg = window.Telegram.WebApp;
const sendDataButton = document.getElementById("sendButton")
const Phoner = document.getElementById("PhoneInput")
const tginput = document.getElementById("TgInput")
const form = document.getElementById("registration")
const SecRad = document.getElementById("8q")
const SecInp = document.getElementById("8qInput")

IMask(
    Phoner,
    {mask : '+{38} (000)-000-00-00}'}
);

IMask(
    tginput,
    {mask : '{@}************************************************************************'}
)

SecInp.addEventListener("input", () => {
    SecRad.value = SecInp.value
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let registrationData = new FormData(form)
    let data = {
        name: registrationData.get("UserName") || "Имя не указано",
        date: registrationData.get("UserBirthday") || "Почта не указана",
        phone: registrationData.get("PhoneInput") || "Номер не указан",
        mail: registrationData.get("UserMail") || "Дата не указана",
        question: registrationData.get("question") || "Ответ не получен",
        tgname: registrationData.get("UserTgName") || "Контакт Telegram не указан",
        question2: registrationData.get("question2") || "Ответ не получен",
        tgOne: registrationData.get("UserQ1") || "Ответ не получен",
        tgTwo: registrationData.get("UserQ2") || "Ответ не получен",
        tgThree: registrationData.get("UserQ3") || "Ответ не получен",
        tgFour: registrationData.get("UserQ4") || "Ответ не получен",
        tgFive: registrationData.get("UserQ5") || "Ответ не получен"
    }

    tg.sendData(JSON.stringify(data))
    tg.close()
})
