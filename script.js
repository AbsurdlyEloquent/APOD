let main = document.querySelector("#main")
let sections = []

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

for (var i = 0; i < 20; i++) {
  sectionDelay(i)
}

function sectionDelay(i) {
  setTimeout(makeSections, 250*i)
}

function loadMore() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    for (var i = 0; i < 20; i++) {
      sectionDelay(i)
    }
  }
}
