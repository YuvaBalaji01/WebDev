

// let a = 5;
// let b = 6;

// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// try{
//     console.log(a+c);
// }
// catch(err){
//     console.log(err);
// }

// console.log(a+b);
// console.log(a+b);


// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout( () =>{
//   console.log("3-4");
// }, 3000);
// console.log("4");
// console.log("5");
// console.log("6");

// const hello = () => {
//     console.log("hello");
// }

// function person(hel){

//     console.log("says");
//     hel();
// }


// person(hello);

//callBack HELL

// function getData(data,getNextdata){
    
//     setTimeout(() => {
//         console.log(`data is ${data}`);
//         if(getNextdata)
//          getNextdata();
//     },3000);
   
   
// }

// getData(1,() =>{
//     getData(2,() => {
//         getData(3,() => {
//             getData(4);
//         })
//     });
// });


// --- promise -----

// let prom = new Promise((resolve,reject) => {
//     console.log("this is a Promise");
//     resolve("success");
// });

// prom.then( (resolve) => {
//    console.log(resolve);
// })

// const promise = () => {

//     return new Promise((resolve,reject) => {
//         console.log("this is a promise");
//         resolve("succes")
//     })
// }

//  let p = promise();
//  p.then( (res) => {
//     console.log(res);
//  })

const getdata = (data) => {

    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("this is a promise data",data);
            resolve("succes");
        },2000)
    })
}


// let p = getdata(1);
// p.then( (res) => {
//     console.log(res)
// })

// --- promise chaining ----

// getdata(1).then(() => {
//     getdata(2).then(() => {
//         getdata(3);
//     })
// })


async function getalldata() {

    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
    await getdata(5);
    
}

getalldata();



