let main = document.querySelector("#main")
let sections = []

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
