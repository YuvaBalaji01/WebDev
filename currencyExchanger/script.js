
// let message = document.querySelector(".msg");
// console.log(message.innerText);

// let newoption = document.createElement("option");
// console.dir(newoption);

//let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

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

const updateFlag = (evt) => {

    let currCode = evt.value;
    let countryCode = countryList[currCode];
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


submit.addEventListener("click",()=>{
    // let opn = document.querySelector("option");
    // console.log(opn.innerText);
    // let input = document.querySelector("#ip");
    // console.log(input.value);
    
})

