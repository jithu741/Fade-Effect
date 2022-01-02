const displayText = document.querySelector('.text')
const backGround = document.querySelector('.background')

let loadingValue = 0
let timeFrame = setInterval(fade, 30)

function fade() {
  loadingValue++
  if (loadingValue> 99){
    clearInterval(timeFrame)
  }

  displayText.innerText = `${loadingValue}%`
  displayText.style.opacity = scale(loadingValue, 0, 100, 1, 0)
  backGround.style.filter = `blur(${scale(loadingValue, 0, 100, 30, 0)}px)`

}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

