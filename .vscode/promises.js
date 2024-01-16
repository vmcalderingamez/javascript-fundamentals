// Promises 
console.log("synchronous 1");
const promise = new Promise((resolve, reject) => {

    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 1_000_000_000) {i++};
        resolve("data back from the server");
    });        

});

console.log("synchronous 2");

// const promise = new Promise((resolve, regect) => {
//     setTimeout(() => {
//         resolve("data back from the server");
//     }, 3000);

//     setTimeout(() => {
//         regect("falied to get data from the server");
//     }, 5000);
// });

promise.then(res => {
    console.log(res);
}).catch(err => console.log(err))
.finally(() => console.log("done")); 