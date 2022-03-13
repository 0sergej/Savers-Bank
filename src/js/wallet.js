const SAVING__BUTTON = document.querySelector('.saving__button')
const WALLET = document.querySelector('.wallet')
const WALLET__CLOSE = document.querySelector('.wallet__close')

let hidden = true

function Hide() {
    if (hidden) {
        WALLET.classList.add('slide--right')
        console.log('slide--right removed')

        hidden = false
    } else if (!hidden) {
        WALLET.classList.remove('slide--right')
        console.log('slide--right added')

        hidden = true
    }
}

SAVING__BUTTON.addEventListener('click', () => {
    Hide()
})
SAVING__BUTTON.addEventListener('keydown', () => {
    Hide()
})
WALLET__CLOSE.addEventListener('click', () => {
    Hide()
})
WALLET__CLOSE.addEventListener('keydown', () => {
    Hide()
})
