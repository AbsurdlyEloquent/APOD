
let main = document.querySelector("#main")
let loadBtn = document.querySelector("#loadMore")
//this is my query key for the API
let key = 'Nia1HkochaeWxNpytF7y19ifKy2FEEPMvUwsgR75'


//This is a class that generates the content
class Generator {
  constructor() {
    this.sections = []
    this.fetchContent()
    setTimeout(()=>{loadBtn.style.display='block'},4750)
  }
  //methods for loading content
  fetchContent() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=20`)
      .then(returned => returned.json())
      .then(newReturned => {
        if (newReturned.code === "400" || newReturned.code === "404") {
          console.err("the request was unsuccseful")
        } else {
          this.raw = newReturned;
          //it initially makes 20 sections
          for (var i = 0; i < 20; i++) {
            this.makeSections(i)
          }
        }
      })
      .catch((err)=>{
        console.error('Your request returned an error!', err);
      })
    }
  //methods for making physical elements
  //this makes a section and appends it to the <main>
  makeSections(i) {
    //a nice delay effect to simulate loading in
    setTimeout(()=>{
      let newDiv = document.createElement('section')
      main.appendChild(newDiv)
      newDiv.classList.add('astroBox')
      this.sections.push(newDiv)
      this.assignContent(newDiv)
    }, 250*i)
  }
  loadMore() {
    //the button dissapears and more is generated
    loadBtn.style.display = 'none'
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=20`)
      .then(returned => returned.json())
      .then(newReturned => {
        if (newReturned.code === "400" || newReturned.code === "404") {
          console.err("the request was unsuccseful")
        } else {
          this.raw = newReturned;
          //it initially makes 20 sections
          for (var i = 0; i < 20; i++) {
            this.makeSections(i)
          }
        }
      })
      .catch((err)=>{
        console.error('Your request returned an error!', err);
      })
    setTimeout(()=>{loadBtn.style.display='block'},4750)
  }
  //method to assign the content to each element
  assignContent(item) {
      Object.assign(item, this.raw[this.sections.indexOf(item)])
      item.style.background = `url('${item.url}')`
  }
  //method to set the background image to the content
}

let content = new Generator
//this function scrolls to the top of the page
//when the 'top' button is clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
