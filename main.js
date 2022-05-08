window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll(home)
  
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2 // Quando for criar variável com valor fix usamos const e se variar usar let //

  // verificar se a sessão passou da linha
  // quais dados vou precisar ?

  // o topo da seção
  const sectionTop = section.offsetTop // OffsetTop se refere ao valor quando o scroll está no topo. Home sempre começa no 0
  
  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou utrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informações dos dados colhidos
  console.log('O topo da seção chegou ou passou da linha', sectionTopReachOrPassedTargetLine)

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar ?
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha alvo?', sectionEndPassedTargetLine)

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAtribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  console.log(scrollY)
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
  }

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
#home img, 
#home .boxstat,
#services, 
#services header, 
#services .card, 
#about, 
#about content`)
