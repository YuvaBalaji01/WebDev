let body = document.querySelector("body");
let main = document.querySelector(".main");
// let dip = document.querySelector("#dip");
let bnt = document.querySelector("button");

bnt.onclick = () =>{

  let txt = bnt.innerText;
  if(txt === "🌙"){
    body.setAttribute("class","light");
    // dip.setAttribute("class","boxlight");
    // dip.innerText = "🔆";
    bnt.innerText = "🔆"
  }
  else{
    body.setAttribute("class","dark");
    // dip.setAttribute("class","boxdark");
    // dip.innerText = "🌙";
    bnt.innerText = "🌙";
  }

  
};

