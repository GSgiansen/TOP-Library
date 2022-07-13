

function Book(author,title,noofpages,readalr) {
    this.author=author;
    this.title=title;
    this.noofpages=noofpages;
    this.readalr=readalr;
}

function addBookToLibrary() {
  // do stuff here
}

//test cases
const Mobydick= new Book('Sherwin','MobyDick',60,false)
const a= new Book('Sherwin','a',69,false)
const b= new Book('Sherwin','b',60,false)
const c= new Book('Sherwin','c',60,false)

let myLibrary = [Mobydick,a,b,c];

let cat=document.getElementById("catalogue")
myLibrary.forEach(boo=>cat.innerHTML+=Object.values(boo))