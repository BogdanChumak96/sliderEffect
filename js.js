const bg1 = document.querySelector('.g1')
const bg2 = document.querySelector('.g2')
const bg3 = document.querySelector('.g3')
const bg4 = document.querySelector('.g4')

const bgc1 = document.querySelector('.b1')
const bgc2 = document.querySelector('.b2')
const bgc3 = document.querySelector('.b3')
const bgc4 = document.querySelector('.b4')


const sliderContainer = document.querySelector('.slider-container')
const slideLeft = document.querySelector('.left-slide')
const slideRight = document.querySelector('.right-slide')
const upButton = document.querySelector('.button-up')
const downButton = document.querySelector('.button-down')
const slidesLength = slideRight.querySelectorAll('div').length

bg1.style.background = `url(https://source.unsplash.com/random/1020x720?sig=${Math.random()*10}) no-repeat`
bg2.style.background = `url(https://source.unsplash.com/random/1020x720?sig=${Math.random()*100}) no-repeat`
bg3.style.background = `url(https://source.unsplash.com/random/1020x720?sig=${Math.random()*1000}) no-repeat`
bg4.style.background = `url(https://source.unsplash.com/random/1020x720?sig=${Math.random()*10000}) no-repeat`
bgc1.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`
bgc2.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`
bgc3.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`
bgc4.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`

let activeSlideIndex = 0


slideLeft.style.top = `-${(slidesLength-1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
    // console.log('gg')
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}

function randomRGB() {

    let r = Math.random() * 255
    return r
}