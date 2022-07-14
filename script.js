

function Book(author,title,noofpages,readalr) {
    this.author=author;
    this.title=title;
    this.noofpages=noofpages;
    this.readalr=readalr;
}
let cat=document.getElementById("catalogue")
function addBookToLibrary(boo) {
  // do stuff here
  const container=document.createElement("div")
  container.classList.add("book")
  let texts=["Author :", "Title :","Number of pages :","Read before ? :"]
  let i=0
  for (const prop in boo){
    container.innerHTML+=(texts[i]+" "+boo[prop])
    container.innerHTML+="<br>"
    container.innerHTML+="<br>"
    i+=1

  }
  boo.index=myLibrary.indexOf(boo)
  addTodisplay(boo,container)


}
function addTodisplay(book,container){
    let cat=document.getElementById("catalogue")
    const butt=document.createElement("button")
    butt.textContent="Finished Reading ?"
    butt.addEventListener("click",clearBookfromLibrary)
    butt.value=book.index
    container.setAttribute("id",book.index)
    container.appendChild(butt)
    cat.appendChild(container)
}

//test cases
const Mobydick= new Book('Sherwin','MobyDick',60,false)
const a= new Book('Sherwin','a',69,false)
const b= new Book('Sherwin','b',60,false)
const c= new Book('Sherwin','c',60,false)
const d=new Book("gs","deeznuts",100000,false)

let myLibrary = [Mobydick,a,b,c,d];



function createNewBook(){
    let author=document.getElementById("author").value
    let title=document.getElementById("titles").value
    let pages=document.getElementById("pages").value
    let readbefore=document.getElementById("readbefore").value
    let newbook=new Book(author,title,pages,readbefore)
    myLibrary.push(newbook)
    addBookToLibrary(newbook)
    document.getElementById("author").value=""
    document.getElementById("titles").value=""
    document.getElementById("pages").value=""
    document.getElementById("readbefore").value=""
}

submitbutton=document.getElementById("submitbutton")
submitbutton.addEventListener("click",createNewBook)

document.getElementById("openform").addEventListener("click", openForm)
function openForm() {
    document.getElementById("addbook").style.display = "block";
    document.getElementById("openform").style.display="none";
  }


document.getElementById("closeform").addEventListener("click", closeForm)
function closeForm() {
    document.getElementById("addbook").style.display = "none";
    document.getElementById("openform").style.display="block";
  }

function clearBookfromLibrary(){
    let index=this.value
    temp=[]
    let wantedbook=document.getElementById(index)
    console.log(wantedbook)
    wantedbook.remove()
    if (myLibrary.length==1){
        myLibrary=[]
    }
    else
    {
    for (let j=0;j<myLibrary.length;j++){
        if (index!=j){
            temp.push(myLibrary[j])

        }
    }
    myLibrary=temp
    console.log(myLibrary)
}
}
  myLibrary.forEach(boo=>addBookToLibrary(boo))