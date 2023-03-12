const account = document.querySelector('.account') // нашли элемент user.svg
const authorization = document.querySelector('.authorization') // нашли окно авторизации
const authorizationReg = document.querySelector('.authorization-reg') // нашли окно регистрации
const authorizationsForm = document.querySelector('.authorization__form') // нашли форму авторизации
const close = document.querySelector('.close') // нашли крестик формы
const reg = document.getElementById('autho-reg') // нашли кнопку регистрации

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

//Валидация
function toValidation(form){
    let result = true
//Проверка на пустые строки
   function errorForm(){
       const allInputs = form.querySelectorAll('input') // Находим все input в форме
       for(const input of allInputs){
           if(input.value === ''){ // Проверяем на пустое поле
               input.classList.add('error-input') // Добавляем input класс 'error-input'
               input.insertAdjacentHTML('beforebegin', `<span class="error">Все поля должны быть заполнены</span>`) // перед input вставляем span
               result = false
           }else{
               input.classList.remove('error-input')// Удаляем класс 'error-input'
           }
       }
   }

// E-mail
   function mailForm(){
        let re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i
       let myMail = document.getElementById('e-mail').value
       let valid = re.test(myMail)
       if(valid) {
           return true
       }
       else {
           let mail = document.getElementById('e-mail')
           mail.classList.add('error-input')
           mail.insertAdjacentHTML('beforebegin',`<span class="error">Не верно указан E-mail</span>` ) // Выводим сообщение перед input
           result = false
       }
   }

//Валидность пароля
   function validPass(){
        let result
       const passValue = document.getElementById('pass').value
       const pass = document.getElementById('pass')

       if (passValue.match(/[a-z]/g) ){
           result = 'valid'
       }
       else {
           pass.classList.add('error-input')
           pass.insertAdjacentHTML('beforebegin', `<span class="error">Пароль должен содержать латинские буквы a-z</span>`)
           return false
       }
       if(passValue.match(/[A-Z]/g)){
           result = 'valid'
       }
       else {
           pass.classList.add('error-input')
           pass.insertAdjacentHTML('beforebegin', `<span class="error">Пароль должен содержать латинские буквы A-Z</span>`)
           return false
       }
       if(passValue.match(/[0-9]/g)){
           result = 'valid'
       }
       else{
           pass.classList.add('error-input')
           pass.insertAdjacentHTML('beforebegin', `<span class="error">Пароль должен содержать цифры</span>`)
           return false
       }
       if(passValue.length >= 8){
           result = 'valid'
       }
       else{
           pass.classList.add('error-input')
           pass.insertAdjacentHTML('beforebegin', `<span class="error">Пароль должен быть не менее 8 символов</span>`)
           return false
       }
       if(passValue.match(/[!@#$%^&*]/g)){
           result = 'valid'
       }
       else{
           pass.classList.add('error-input')
           pass.insertAdjacentHTML('beforebegin', `<span class="error">Пароль должен содержать спецсимволы</span>`)
           return false
       }

       if(passValue.match(/[^a-zA-Z0-9A-Z\d]/g)){
           result = 'valid'
       }
       else{
           return false
       }
       return result
   }

//Сравнение паролей
   function repeatValidPass(){
        const repeatPass = document.getElementById('repeat-pass')
        if(validPass == repeatPass){
            return true
        }
        else{
            repeatPass.insertAdjacentHTML('beforebegin', `<span class="error">Пароли не совпадают</span>`)
            return false
        }
   }
//Форма Логина

   errorForm()
   mailForm()
   validPass()
   repeatValidPass()
   toSendRegForm()

    return result
}

//Регистрация
function regForm(){
    reg.addEventListener('click', function(){
        authorization.style.opacity = 0
        authorizationReg.style.opacity = 1
        authorizationReg.style.zIndex = 100
    })
}
regForm()

// Отправка Формы Регистрации
function toSendRegForm(){
    authorizationReg.addEventListener('submit', function(e){
        const eMail = document.getElementById('e-mail').value
        const pass = document.getElementById('pass').value
        const repeatPass = document.getElementById('repeat-pass').value

        // Получаем данные из input и записываем их в 'localStorage'
        localStorage.setItem('login', JSON.stringify({
            eMail: eMail,
            pass: pass,
            repeatPass: repeatPass
        }));

        if(toValidation(this) === true){
                console.log('Форма отправлена')
           }else{
                console.log('Форма не отправлена')
        }

    })

}

toSendRegForm()


// function login(){
//     // const login = document.getElementById('login').value
//     // const loginPass = document.getElementById('autho-pass').value
//     const btnSend = document.getElementById('send')
//     btnSend.addEventListener('click', () =>{
//         localStorage.getItem('login');
//         // if(localStorage.key(0) === login && localStorage.key(1) ===loginPass)
//         // console.log('форма отправлена')
//         // else{
//         //     console.log('error')
//         // }
//         // localStorage.getItem('login')
//         console.log(localStorage.key(1))
//     })
// }
//
// login()