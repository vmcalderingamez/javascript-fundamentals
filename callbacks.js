// Callbacks are fuctions that are passed as arguments to another functions

const greetUser = (username, callback) => {
    if (callback) {
        console.log(callback(username));
    } else {
        console.log(username + " but no callback");
    }
}

const cb = name => "Hello " + name;

greetUser("james");