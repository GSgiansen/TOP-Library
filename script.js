

function Book(author,title,noofpages,readalr) {
    this.author=author;
    this.title=title;
    this.noofpages=noofpages;
    this.readalr=readalr;
}
let cat=document.getElementById("catalogue")
function addBookToLibrary(boo) {
  // do stuff here
  const nboo=document.createElement("div")
  nboo.classList.add("book")
  let texts=["Author :", "Title :","Number of pages :","Read before ? :"]
  let i=0
  for (const prop in boo){
    nboo.innerHTML+=(texts[i]+" "+boo[prop])
    nboo.innerHTML+="<br>"
    nboo.innerHTML+="<br>"
    i+=1
    
  }
  cat.appendChild(nboo)


}

//test cases
const Mobydick= new Book('Sherwin','MobyDick',60,false)
const a= new Book('Sherwin','a',69,false)
const b= new Book('Sherwin','b',60,false)
const c= new Book('Sherwin','c',60,false)
const d=new Book("gs","deeznuts",100000,false)

let myLibrary = [Mobydick,a,b,c,d];


myLibrary.forEach(boo=>addBookToLibrary(boo))


button=document.getElementById('addbook')
button.addEventListener("click",addBookToLibrary)