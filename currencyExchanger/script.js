
const BASE_URL =
  "https://open.er-api.com/v6/latest/"

let tag1 = document.querySelector("#from");
let tag2 = document.querySelector("#to");
let tags = [tag1,tag2];

for(let tag of tags){
    for(code in countryList){
        let newoption = document.createElement("option");
        newoption.value = code;
        newoption.innerText = code;
        tag.appendChild(newoption);  
        if(code === "USD" && tag.name === "From")
            newoption.selected = "selected";
        if(code === "INR" && tag.name === "To")
            newoption.selected = "selected";
    }
}



let submit = document.querySelector("button");

let tocntcode;
let fromcntcode;

const updateFlag = (evt) => {

    let currCode = evt.value;
    let countryCode = countryList[currCode];
    // if(evt.name === "From") fromcntcode = countryCode;
    // else tocntcode = countryCode; 
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img;
    if(evt.name === "From"){
        img = document.querySelector("#fromimg");
    }
    else img = document.querySelector("#toimg");
    img.setAttribute("src",newSrc);
    
}



tag1.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
tag2.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });



const updatemsg = async () =>{

    let input = document.querySelector("input");
    let amt = input.value;
    if(amt === "" || amt < 0){
        amt = 1;
        input.value = "1";
    }
    let fromcntcode = tag1.value;
    let tocntcode = tag2.value;
    let api = `${BASE_URL}/${fromcntcode}`;
    let response = await fetch(api);
    //console.log(response.status)
    let data = await response.json();
    console.log(data);
    let rate = data.rates[tocntcode];
    console.log(rate);
    let finalAns = `${amt} ${fromcntcode} = ${rate*amt} ${tocntcode}` 
    let msg = document.querySelector(".msg");
    // console.log(msg.innerText);
    msg.innerText = finalAns;
  }

submit.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updatemsg();
});

window.addEventListener("load", () => {
  updatemsg();
});

