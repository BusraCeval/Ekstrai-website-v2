const cursor = document.querySelector('.cursor')

const text = document.querySelector('.text')

cursor.style.visibility = 'hidden'

document.addEventListener('mousemove', (event) => {
  cursor.setAttribute(`style`, `top: ${event.clientY - 6}px; left: ${event.clientX - 6}px`)
})

text.addEventListener('mouseenter', () => {
  cursor.classList.add('cursor-hover')
})

text.addEventListener('mouseleave', () => {
  cursor.classList.remove('cursor-hover')
})