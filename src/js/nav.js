const NAV__SWITCH__BACKGROUND = document.querySelector(
    '.nav__switch--background'
)
const NAV__SWITCH = document.querySelector('.nav__switch')
const HEADER = document.querySelector('.header')

let open = false

NAV__SWITCH__BACKGROUND.addEventListener('click', () => {
    if (open) {
        HEADER.classList.remove('open')
        NAV__SWITCH.classList.remove('change')
        NAV__SWITCH__BACKGROUND.classList.remove('change--background')
        open = !open
    } else if (!open) {
        HEADER.classList.add('open')
        NAV__SWITCH.classList.add('change')
        NAV__SWITCH__BACKGROUND.classList.add('change--background')
        open = !open
    }
})
