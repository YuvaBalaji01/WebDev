
let input = document.querySelector(".ip");
let bnt = document.querySelector("button");

bnt.addEventListener("click", ()=> {
    const val = input.value;
    console.log(val);    
})

// let message = document.querySelector(".msg");
// console.log(message.innerText);

// let newoption = document.createElement("option");
// console.dir(newoption);

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

