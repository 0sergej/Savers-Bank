const SIGN__IN__BUTTON = document.querySelectorAll('.button--sign-in')
const SIGN__IN = document.querySelector('#sign-in')
const SIGN__IN__CLOSE = document.querySelector('.sign-in--close')
const CONTINUE__BUTTON = document.querySelector('.continue--button--sign-in ')
const ACCOUNT_CREATED = document.querySelector('.account--created')

let hiddenSignIn = true

function HideSignIn() {
    if (hiddenSignIn) {
        SIGN__IN.classList.add('slide--right')
        SIGN__IN.classList.remove('slide-out')
        SIGN__IN.show()

        hiddenSignIn = false
    } else if (!hiddenSignIn) {
        SIGN__IN.classList.remove('slide--right')
        SIGN__IN.classList.add('slide-out')
        SIGN__IN.close()

        hiddenSignIn = true
    }
}

function AccountCreated() {
    ACCOUNT_CREATED.style.display = 'block' //shows message
    setTimeout(() => {
        ACCOUNT_CREATED.style.display = 'none' //hiddes message after 2000ms (2s)
    }, 2000)
}

for (let i = 0; i < SIGN__IN__BUTTON.length; i++) {
    SIGN__IN__BUTTON[i].addEventListener('click', () => {
        HideSignIn()
    })
    SIGN__IN__BUTTON[i].addEventListener('keydown', e => {
        if (e.key == 'enter') {
            HideSignIn()
        }
    })
}
SIGN__IN__CLOSE.addEventListener('click', () => {
    HideSignIn()
})
SIGN__IN__CLOSE.addEventListener('keydown', e => {
    if (e.key == 'enter') {
        HideSignIn()
    }
})
CONTINUE__BUTTON.addEventListener('click', () => {
    HideSignIn()

    AccountCreated()
})
CONTINUE__BUTTON.addEventListener('keydown', e => {
    if (e.key == 'enter') {
        HideSignIn()

        AccountCreated()
    }
})
