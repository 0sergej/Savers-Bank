const SAVING__BUTTON = document.querySelector('.saving__button')
const WALLET = document.querySelector('.wallet')
const WALLET__CLOSE = document.querySelector('.wallet__close')

let hidden = true

function HideWallet() {
    if (hidden) {
        WALLET.classList.add('slide--right')
        WALLET.classList.remove('slide-out')

        hidden = false
    } else if (!hidden) {
        WALLET.classList.remove('slide--right')
        WALLET.classList.add('slide-out')

        hidden = true
    }
}

SAVING__BUTTON.addEventListener('click', () => {
    HideWallet()
})
SAVING__BUTTON.addEventListener('keydown', () => {
    HideWallet()
})
WALLET__CLOSE.addEventListener('click', () => {
    HideWallet()
})
WALLET__CLOSE.addEventListener('keydown', () => {
    HideWallet()
})
