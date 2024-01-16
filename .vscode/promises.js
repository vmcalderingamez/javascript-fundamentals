// Promises 

const promise = new Promise((resolve, regect) => {
    setTimeout(() => {
        resolve("data back from the server");
    }, 3000);

    setTimeout(() => {
        regect("falied to get data from the server");
    }, 5000);
});

promise.then(res => {
    console.log(res);
}).catch(err => console.log(err))
.finally(() => console.log("done")); 