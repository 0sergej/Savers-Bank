const NAV__SWITCH__BACKGROUND = document.querySelector(
    '.nav__switch--background'
)
const NAV__SWITCH = document.querySelector('.nav__switch')
const HEADER = document.querySelector('.header')
const NAV = document.querySelector('.nav__list')
const NAV__ITEM = document.querySelectorAll('.nav__link')
const FAVICON = document.querySelector('.favicon')
const SIGN__IN__BUTTON = document.querySelector('.button--sign-in')

let open = false
let mobile = 600
let PC = 1281

function Open() {
    if (open) {
        HEADER.classList.remove('open')
        NAV__SWITCH.classList.remove('change')
        NAV__SWITCH__BACKGROUND.classList.remove('change--background')
        NAV.classList.add('hidden')
        FAVICON.classList.remove('hidden')
        SIGN__IN__BUTTON.classList.remove('padding--reset')

        open = !open
    } else if (!open) {
        if (document.body.clientWidth < PC) {
            HEADER.classList.add('open')
            NAV__SWITCH.classList.add('change')
            NAV__SWITCH__BACKGROUND.classList.add('change--background')
            NAV.classList.remove('hidden')
            if (document.body.clientWidth <= mobile) {
                FAVICON.classList.add('hidden')
                SIGN__IN__BUTTON.classList.add('padding--reset')
            }
            open = !open
        }
    }
}

NAV__SWITCH__BACKGROUND.addEventListener('click', () => {
    Open()
})
NAV__SWITCH__BACKGROUND.addEventListener('keydown', () => {
    if (e.key == 'enter') {
        Open()
    }
})

for (let i = 0; i < NAV__ITEM.length; i++) {
    NAV__ITEM[i].addEventListener('click', () => {
        Open()
    })
    NAV__ITEM[i].addEventListener('keydown', e => {
        if (e.key == 'enter') {
            Open()
        }
    })
}
