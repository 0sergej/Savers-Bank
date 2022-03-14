const SIGN__IN__BUTTON = document.querySelectorAll('.button--sign-in')
const SIGN__IN = document.querySelector('.sign-in')
const SIGN__IN__CLOSE = document.querySelectorAll('.sign__close')

let hidden = true

function HideSignIn() {
    if (hidden) {
        SIGN__IN.classList.add('slide--right')
        SIGN__IN.classList.remove('slide-out')

        hidden = false
    } else if (!hidden) {
        SIGN__IN.classList.remove('slide--right')
        SIGN__IN.classList.add('slide-out')

        hidden = true
    }
}

for (let i = 0; i < SIGN__IN__BUTTON.length; i++) {
    SIGN__IN__BUTTON[i].addEventListener('click', () => {
        HideSignIn()
    })
    SIGN__IN__BUTTON[i].addEventListener('keydown', () => {
        HideSignIn()
    })
}

for (let i = 0; i < SIGN__IN__CLOSE.length; i++) {
    SIGN__IN__CLOSE[i].addEventListener('click', () => {
        HideSignIn()
    })
    SIGN__IN__CLOSE[i].addEventListener('keydown', () => {
        HideSignIn()
    })
}