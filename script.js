let main = document.querySelector("#main")
let sections = []
let loadBtn = document.querySelector('#loadMore')

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function makeSections() {
    let newDiv = document.createElement('section')
    main.appendChild(newDiv)
    newDiv.classList.add('astroBox')
    sections.push(newDiv)
}
function loading() {
  loadBtn.style.display = "none"
  for (var i = 0; i < 20; i++) {
    sectionDelay(i)
  }
  setTimeout(()=>{loadBtn.style.display='block'},4750)
}
loading()

function sectionDelay(i) {
  setTimeout(makeSections, 250*i)
}
