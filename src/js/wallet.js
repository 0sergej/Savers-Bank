const SAVING__BUTTON = document.querySelector('.saving__button')
const WALLET = document.querySelector('#wallet')
const WALLET__CLOSE = document.querySelector('.wallet__close')
const CONTINUE__BUTTON = document.querySelector('.continue--button--wallet')
const ACCOUNT_CREATED = document.querySelector('.account--created')

let hiddenWallet = true

function HideWallet() {
    if (hiddenWallet) {
        WALLET.classList.add('slide--right')
        WALLET.classList.remove('slide-out')
        WALLET.show()

        hiddenWallet = false
    } else if (!hiddenWallet) {
        WALLET.classList.remove('slide--right')
        WALLET.classList.add('slide-out')
        WALLET.close()

        hiddenWallet = true
    }
}
function AccountCreated() {
    ACCOUNT_CREATED.style.display = 'block' //shows message
    setTimeout(() => {
        ACCOUNT_CREATED.style.display = 'none' //hiddes message after 2000ms (2s)
    }, 2000)
}

SAVING__BUTTON.addEventListener('click', () => {
    HideWallet()
})
SAVING__BUTTON.addEventListener('keydown', e => {
    if (e.ket == 'enter') {
        HideWallet()
    }
})
WALLET__CLOSE.addEventListener('click', () => {
    HideWallet()
})
WALLET__CLOSE.addEventListener('keydown', e => {
    if (e.ket == 'enter') {
        HideWallet()
    }
})
CONTINUE__BUTTON.addEventListener('click', () => {
    HideWallet()

    AccountCreated()
})
CONTINUE__BUTTON.addEventListener('keydown', e => {
    if (e.ket == 'enter') {
        HideWallet()

        AccountCreated()
    }
})
