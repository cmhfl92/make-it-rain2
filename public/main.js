const qs = s => document.querySelector(s)


const main = () => {
  const rain =
  document.querySelector('.rain')

  rain.style.top = '0px'

  setInterval(() => {
    rain.style.top = '0px'
  }, 60000)

  const animate = () => {
    rain.style.top =
   `{parseInt(rain.style.top) + 1}px`
  }

  setInterval(animate, 12)

 const rain () =>
  clearInterval('.rain')

  setTimeout(() => {
    rain.style.backgroundColor = 'lightblue'
  }, 5000)
}

document.addEventListener('DOMContentLoaded', main)
