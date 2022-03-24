const NAV__SWITCH__BACKGROUND = document.querySelector(
    '.nav__switch--background'
)
const NAV__SWITCH = document.querySelector('.nav__switch')
const HEADER = document.querySelector('.header')
const NAV = document.querySelector('.nav__list')
const NAV__ITEM = document.querySelectorAll('.nav__link')

let open = false

function Open() {
    if (open) {
        HEADER.classList.remove('open')
        NAV__SWITCH.classList.remove('change')
        NAV__SWITCH__BACKGROUND.classList.remove('change--background')
        NAV.classList.add('hidden')

        open = !open
    } else if (!open) {
        HEADER.classList.add('open')
        NAV__SWITCH.classList.add('change')
        NAV__SWITCH__BACKGROUND.classList.add('change--background')
        NAV.classList.remove('hidden')
        open = !open
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
