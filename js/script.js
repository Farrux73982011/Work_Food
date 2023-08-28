let modal = document.querySelector('.modal')
let btns_open = document.querySelectorAll('[data-modal]')
let close_btns = document.querySelectorAll('[data-close]')
let btns_open2 = document.querySelectorAll('[data-call]')

function modalToggler(arr , callBack){
    arr.forEach(btn =>{
        btn.onclick = () => {
            callBack()
        }
    })
}

function openModal() {
    modal.classList.add('fade', 'show')
    modal.classList.remove('hide')
}
function closeModal() {
    modal.classList.remove('fade', 'show')
}
modalToggler(btns_open, openModal)
modalToggler(close_btns, closeModal)


let tabcontent__descr = document.querySelector('tabcontent__descr')

let tab_btns = document.querySelectorAll('.tabheader__item')
let tabc = document.querySelectorAll('.tabcontent')
let tabb = document.querySelectorAll('.tabheader_item')
let tabheader__item1 = document.querySelector('.tabheader__item1')
let tabheader__item2 = document.querySelector('.tabheader__item2')
let tabheader__item3 = document.querySelector('.tabheader__item3')
let tabheader__item4 = document.querySelector('.tabheader__item4')

tab_btns.forEach((btn) => {
    btn.onclick = () =>{
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')

        if (tabheader__item1.classList.contains('tabheader__item_active')) {
            tabc.forEach(item => item.classList.add('hide'))
            tabc[0].classList.remove('hide')
        }else if(tabheader__item2.classList.contains('tabheader__item_active')){
            tabc.forEach(item => item.classList.add('hide'))
            tabc[1].classList.remove('hide')
        }else if(tabheader__item3.classList.contains('tabheader__item_active')){
            tabc.forEach(item => item.classList.add('hide'))
            tabc[2].classList.remove('hide')
        }else if(tabheader__item4.classList.contains('tabheader__item_active')){
            tabc.forEach(item => item.classList.add('hide'))
            tabc[3].classList.remove('hide')
        }
    }
})

tabc.forEach(item => item.classList.add('hide'))
tabc[0].classList.remove('hide')


let offer__slider_prev = document.querySelector('.offer__slider-prev')
let offer__slider_next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let curr = document.querySelector('#current')
let total = document.querySelector('#total')
total.innerHTML = slides.length

let slideIndex = 0
showSlides()

function showSlides(n) {

    if(n > slides.length - 1) {
        slideIndex = 0
    }
        if(n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide'))
    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
    curr.innerHTML = slideIndex + 1
}

offer__slider_next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}
offer__slider_prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

let form = document.forms.form
let form2 = document.forms.form2
let inp = document.querySelectorAll('.modal__input')
let inp2 = document.querySelectorAll('.order__input')
let btn = document.querySelector('.modal_btn')
let btn2 = document.querySelector('.order_btn')

form.onsubmit = (event) => {
    event.preventDefault()
}
form2.onsubmit = (event) => {
    event.preventDefault()
}



let patterns = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/
}

function validation(regex, field) {
    if (regex.test(field.value)) {
        console.log('good');
    } else {
        console.log('error');
    }
}


inp.forEach(inp => {
    btn.onclick = () => {
        validation(patterns[inp.name], inp)
    }
})

inp2.forEach(inp => {
    btn2.onclick = () => {
        validation(patterns[inp2.name], inp2)
    }
})

let day = document.querySelector('#days')
let hour = document.querySelector('#hours')
let min = document.querySelector('#minutes')
let sec = document.querySelector('#seconds')

let endDay = new Date('May 20, 2024, 00:00:00').getTime()

let func = setInterval(() => {
    let now  = new Date().getTime()  
    let prom = endDay - now

    day.innerHTML = Math.floor(prom / (1000 * 60 * 60 * 24))
    hour.innerHTML = Math.floor((prom % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    min.innerHTML = Math.floor((prom % (1000 * 60 * 60)) / (1000 * 60))
    sec.innerHTML = Math.floor((prom % (1000 * 60)) / (1000))
});

let genderBts = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let result_viev = document.querySelector('.result')

let userData = {
    gender: 'woman',
}
genderBts.forEach(btn =>{
    btn.onclick = () => {
        genderBts.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let key = btn.getAttribute('data-g')

        userData.gender = key
    }
})

inputs.forEach(inp => {
    inp.onkeyup = () =>{
        userData[inp.id] = inp.value
    }
})

actBtns.forEach(btn =>{
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let coefficient = btn.getAttribute('data-act')
        
        if(userData.gender === 'woman'){
            let result = 655.1 + (9.563 * userData.weight) + (1.85 * userData.height) - (4.676 * userData.age)
            result_viev.innerHTML = Math.floor(result * coefficient)
        }else{
            let result =  66.5 + (13.75 * userData.weight) + (5.003 * userData.height) - (6,775 * userData.age)
            result_viev.innerHTML = Math.floor(result * coefficient)
        }
    }
})