const SIGN__IN__BUTTON = document.querySelectorAll('.button--sign-in')
const SIGN__IN = document.querySelector('.sign-in')
const SIGN__IN__CLOSE = document.querySelector('.sign-in--close')
const CONTINUE__BUTTON = document.querySelector('.continue--button--sign-in')

let hiddenSignIn = true

function HideSignIn() {
    if (hiddenSignIn) {
        SIGN__IN.classList.add('slide--right')
        SIGN__IN.classList.remove('slide-out')

        hiddenSignIn = false
    } else if (!hiddenSignIn) {
        SIGN__IN.classList.remove('slide--right')
        SIGN__IN.classList.add('slide-out')

        hiddenSignIn = true
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
SIGN__IN__CLOSE.addEventListener('click', () => {
    HideSignIn()
})
SIGN__IN__CLOSE.addEventListener('keydown', () => {
    HideSignIn()
})
CONTINUE__BUTTON.addEventListener('click', () => {
    HideSignIn()
})
CONTINUE__BUTTON.addEventListener('keydown', () => {
    HideSignIn()
})
