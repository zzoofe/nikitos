const account = document.querySelector('.account') // нашли элемент user.svg
const authorization = document.querySelector('.authorization') // нашли окно авторизации
const authorizationReg = document.querySelector('.authorization-reg') // нашли окно регистрации
const authorizationsForm = document.querySelector('.authorization__form') // нашли форму авторизации
const close = document.querySelector('.close') // нашли крестик формы
const reg = document.getElementById('reg') // нашли кнопку регистрации

// Показать окно авторизации
account.addEventListener('click', () => {
    authorization.style.opacity = 1
    authorization.style.zIndex = 100
    authorization.classList.add('authorization-animate')
})

// Закрыть окно авторизации
close.addEventListener('click', () => {
    authorization.style.opacity = 0
    if(close){
        authorization.style.zIndex = -1
        authorization.classList.remove('.authorization-animate')
    }
})
function Registration(){
   // const allInputs = authorizationReg.querySelectorAll('input')
    const eMail = document.getElementById('e-mail').value
    console.log(eMail)
}
Registration()
