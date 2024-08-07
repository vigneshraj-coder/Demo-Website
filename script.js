function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const sections = document.querySelectorAll('div')

document.addEventListener('scroll', () => {
  sections.forEach(div => {
    if(div.getBoundingClientRect().top <= document.body.scrollTop) {
      document.body.style.background = div.dataset.color
    }    
  })
})
