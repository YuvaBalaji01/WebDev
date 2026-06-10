let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let res = document.querySelector("#res");
let uscr = document.querySelector("#uscr");
let cscr = document.querySelector("#cscr");

let cc = "";

function randomm(){
    let choice = ['R','S','P'];
    let idx = Math.floor(Math.random() * 3);
    return choice[idx];
}

rock.addEventListener("click",() =>{
    cc = randomm();

    if(cc == "R"){
      res.imnerText = "Its a Draw";
    }
    else if(cc == "P"){
        uscr.innerText = Number(uscr.innerText) + 1;
        res.innerText = "You Won!!";
    }
    else {
        cscr.innerText = Number(cscr.innerText) + 1;
        res.innerText = "Computer Won :("
    }
})

paper.addEventListener("click",() =>{
    cc = randomm();

    if(cc == "R"){
        uscr.innerText = Number(uscr.innerText) + 1;
        res.innerText = "You Won!!";
      
    }
    else if(cc == "P"){
       res.imnerText = "Its a Draw";
    }
    else {
        cscr.innerText = Number(cscr.innerText) + 1;
        res.innerText = "Computer Won :("
    }
})

scissor.addEventListener("click",() =>{
    cc = randomm();

    if(cc == "R"){
        cscr.innerText = Number(cscr.innerText) + 1;
        res.innerText = "Computer Won :("  
    }
    else if(cc == "P"){
        uscr.innerText = Number(uscr.innerText) + 1;
        res.innerText = "You Won!!";
    }
    else {
        res.imnerText = "Its a Draw";
    }
})
